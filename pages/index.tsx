import React, { Suspense } from "react";
import * as Mui from "@material-ui/core";
import { RecoilRoot } from "recoil";
import {
  useCovid19PrefecturesQuery,
  useCovid19StatisticsQuery
} from "../entities/covid19/query";
import { ApexCharts } from "./charts/ApexCharts";

const Covid19Prefectures: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery();
  switch (prefectures.state) {
    case "hasValue":
      return (
        <Mui.Grid container spacing={4}>
          <ApexCharts />
        </Mui.Grid>
      );
    case "loading":
      return <Mui.CircularProgress />;
    default:
      return <>error...</>;
  }
};

const Index: React.VFC = () => {
  const content = (
    <RecoilRoot>
      <Mui.Typography variant="h6">COVID19 date</Mui.Typography>
      <Covid19Prefectures />
    </RecoilRoot>
  );
  return content;
};

export default Index;
