import React from "react";
import * as Mui from "@material-ui/core";
import { RecoilRoot } from "recoil";
import {
  useCovid19PrefecturesQuery,
  useCovid19TotalQuery
} from "../entities/covid19/query";
// 横棒グラフ
import { ApexChartsHorizontalBar } from "./charts/apexCharts/HorizontalBar";
import { ChartjsHorizontalBar } from "./charts/chartjs/HorizontalBar";
import { GoogleChartsHorizontalBar } from "./charts/googleCharts/HorizontalBar";
// 折れ線　グラフ
import { ApexChartsLine } from "./charts/apexCharts/Line";
import { GoogleChartsLine } from "./charts/googleCharts/Line";
import { ChartjsLine } from "./charts/chartjs/Line";
// 円グラフ
import { ApexChartsPie } from "./charts/apexCharts/Pie";
import { GoogleChartsPie } from "./charts/googleCharts/Pie";
import { ChartjsPie } from "./charts/chartjs/Pie";

const Line: React.VFC = () => {
  return (
    <Mui.Grid container spacing={4}>
      <ApexChartsLine />
      <GoogleChartsLine />
      <ChartjsLine />
    </Mui.Grid>
  );
};
const Pie: React.VFC = () => {
  return (
    <Mui.Grid container spacing={4}>
      <ApexChartsPie />
      <GoogleChartsPie />
      <ChartjsPie />
    </Mui.Grid>
  );
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
          {/* 横棒グラフ */}
          <HorizontalBar />
          {/* 円グラフ */}
          <Pie />
        </>
      );
    case "loading":
      return <Mui.CircularProgress />;
    default:
      return <>error...</>;
  }
};

const Covid19Total: React.VFC = () => {
  const total = useCovid19TotalQuery();
  switch (total.state) {
    case "hasValue":
      return (
        <>
          {/* 折れ線グラフ */}
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
      <Covid19Total />
    </RecoilRoot>
  );
  return content;
};

export default Index;
