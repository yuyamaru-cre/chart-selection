/* eslint-disable @typescript-eslint/ban-types */
import {
  GetRecoilValue,
  GetCallback,
  SerializableParam,
  atom,
  DefaultValue,
  selector,
  selectorFamily
} from "recoil";

type RawSelectorOptions = {
  get: GetRecoilValue;
  getCallback: GetCallback;
};

type DefaultCallbackArg<P> = RawSelectorOptions & {
  param: P;
};

export interface AtomRewindOptions<T, P> {
  key: string;
  default: (arg: DefaultCallbackArg<P>) => Promise<T>;
  dangerouslyAllowMutability?: boolean;
}

export function atomRewind<T, P extends SerializableParam>(
  options: AtomRewindOptions<T, P>
) {
  const setCount = atom({
    key: `${options.key}/setCount`,
    default: 0
  });

  let overrideValue: T | DefaultValue = new DefaultValue();

  return selector<T>({
    key: options.key,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    get: (selectorOpts) => {
      const { get } = selectorOpts;

      get(setCount);
      return overrideValue instanceof DefaultValue
        ? options.default({ ...selectorOpts, param: {} as any })
        : overrideValue;
    },
    set: ({ set }, newValue) => {
      overrideValue = newValue;
      set(setCount, (count) => count + 1);
    }
  });
}

export function atomRewindWithParam<T, P extends SerializableParam>(
  options: AtomRewindOptions<T, P>
) {
  const queryRefresh = atom({
    key: `${options.key}/setCount`,
    default: 0
  });

  let overrideValue: T | DefaultValue = new DefaultValue();

  return selectorFamily<T, P>({
    key: options.key,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    get: (param) => (selectorOpts) => {
      const { get } = selectorOpts;

      get(queryRefresh);
      return overrideValue instanceof DefaultValue
        ? options.default({ ...selectorOpts, param })
        : overrideValue;
    },
    set: (_) => ({ set }, newValue) => {
      overrideValue = newValue;
      set(queryRefresh, (count) => count + 1);
    }
  });
}
