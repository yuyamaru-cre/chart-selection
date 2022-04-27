import React, { Suspense } from "react";
import Link from "next/link";
import * as Mui from "@material-ui/core";
import { RecoilRoot } from "recoil";
import {
  useCovid19PrefecturesQuery,
  useCovid19StatisticsQuery
} from "../entities/covid19/query";

type Props = {};

const Covid19Prefectures: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();
  return (
    <>
      {prefectures.map((pref: any, index: number) => (
        <p key={index}>
          {pref.name_ja}: {pref.cases} 件
        </p>
      ))}
    </>
  );
};

const TestForm: React.VFC<Props> = (props) => {
  const content = (
    <RecoilRoot>
      <Mui.Container>
        <Mui.Box mb={4}>
          <Link href="./">
            <Mui.Link rel="noopener">Back</Mui.Link>
          </Link>
        </Mui.Box>
        <Mui.Box>
          <Mui.Typography component="p" variant="subtitle1">
            COVID19 date
          </Mui.Typography>
          <Suspense fallback={<p>Loading...</p>}>
            <Covid19Prefectures />
          </Suspense>
        </Mui.Box>
      </Mui.Container>
    </RecoilRoot>
  );
  return content;
};

export default TestForm;
