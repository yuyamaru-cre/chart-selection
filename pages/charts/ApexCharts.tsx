import React from "react";
import * as Mui from "@material-ui/core";
import {
  useCovid19PrefecturesQuery,
  useCovid19StatisticsQuery
} from "../../entities/covid19/query";
import Chart from "react-apexcharts";

const initOptions = {
  chart: {
    id: "horizontal-bar"
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  series: {},
  xaxis: {
    // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};
const initSeries = [
  {
    name: "感染者数"
    // data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
];

export const ApexCharts: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const options = {
    ...initOptions,
    xaxis: {
      categories: prefectures.map((pre: any) => pre.name_ja)
    }
  };

  const series = [
    {
      ...initSeries,
      data: prefectures.map((pre: any) => pre.cases)
    }
  ];

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          ApexCharts
        </Mui.Typography>
        <Chart options={options} series={series} type="bar" height={1200} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
