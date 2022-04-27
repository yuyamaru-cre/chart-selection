import React, { Suspense } from "react";
import * as Mui from "@material-ui/core";
import { RecoilRoot } from "recoil";
import {
  useCovid19PrefecturesQuery,
  useCovid19StatisticsQuery
} from "../entities/covid19/query";
import { ApexCharts } from "./charts/ApexCharts";

const Covid19Prefectures: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();
  return (
    <Mui.Grid container spacing={4}>
      {prefectures ? <ApexCharts /> : <></>}
    </Mui.Grid>
  );
};

const Index: React.VFC = () => {
  const content = (
    <RecoilRoot>
      <Suspense fallback={<p>Loading...</p>}>
        <Mui.Typography variant="h6">COVID19 date</Mui.Typography>
        <Covid19Prefectures />
      </Suspense>
    </RecoilRoot>
  );
  return content;
};

export default Index;
