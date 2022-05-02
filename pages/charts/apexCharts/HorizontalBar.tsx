import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const initOptions = {
  chart: {
    id: "horizontal-bar"
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  }
};

export const ApexChartsHorizontalBar: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const options = {
    ...initOptions,
    xaxis: {
      categories: prefectures.map((pre: any) => pre.name_ja)
    }
  };

  const series = [
    {
      name: "件数",
      data: prefectures.map((pre: any) => pre.cases)
    }
  ];

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://apexcharts.com/">
            ApexCharts
          </a>
        </Mui.Typography>
        <Chart options={options} series={series} type="bar" height={1200} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
