import React from "react";
import * as Mui from "@material-ui/core";
import { RecoilRoot } from "recoil";
import { useCovid19PrefecturesQuery } from "../entities/covid19/query";
import { ApexChartsHorizontalBar } from "./charts/apexCharts/HorizontalBar";
import { ChartjsHorizontalBar } from "./charts/chartjs/HorizontalBar";
import { GoogleChartsHorizontalBar } from "./charts/googleCharts/HorizontalBar";

const Line: React.VFC = () => {
  return <Mui.Grid container spacing={4}></Mui.Grid>;
};
const Pie: React.VFC = () => {
  return <Mui.Grid container spacing={4}></Mui.Grid>;
};
const HorizontalBar: React.VFC = () => {
  return (
    <Mui.Grid container spacing={4}>
      <ApexChartsHorizontalBar />
      <GoogleChartsHorizontalBar />
      <ChartjsHorizontalBar />
    </Mui.Grid>
  );
};

const Covid19Prefectures: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery();
  switch (prefectures.state) {
    case "hasValue":
      return (
        <>
          横棒グラフ
          <HorizontalBar />
          円グラフ
          <Pie />
          折れ線グラフ
          <Line />
        </>
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
