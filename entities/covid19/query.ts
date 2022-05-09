import { selector, useRecoilCallback, useRecoilValueLoadable } from "recoil";
import { atomRewind } from "../../utilities/recoil";
import { uuidV4 } from "../../utilities/uuid";

const prefix = " https://covid19-japan-web-api.now.sh/api/v1/";

const covid19PrefecturesQuery = atomRewind({
  key: uuidV4(),
  default: async () => {
    const response = await (await fetch(prefix + "prefectures")).json();
    console.log(response);
    return response;
  }
});

const covid19TotalQuery = atomRewind({
  key: uuidV4(),
  default: async () => {
    const response = await (await fetch(prefix + "total?history=true")).json();
    console.log(response);
    return response;
  }
});

export const useRefetchCovid19Prefectures = () =>
  useRecoilCallback(
    ({ reset }) => () => {
      reset(covid19PrefecturesQuery);
    },
    []
  );

export const useRefetchCovid19Total = () =>
  useRecoilCallback(
    ({ reset }) => () => {
      reset(covid19TotalQuery);
    },
    []
  );

export const useCovid19PrefecturesQuery = () =>
  useRecoilValueLoadable(covid19PrefecturesQuery);

export const useCovid19TotalQuery = () =>
  useRecoilValueLoadable(covid19TotalQuery);
