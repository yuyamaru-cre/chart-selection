import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const initOptions = {
  chart: {
    // type: "donut"
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
};

export const ApexChartsPie: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const options = {
    ...initOptions,
    labels: ["入院", "自宅療養"]
  };

  const series = [
    // prefectures.reduce((sum: number, pre: any) => sum + pre.case, 0), // 感染者
    prefectures[12].hospitalize, // 入院
    // prefectures.reduce((sum: number, pre: any) => sum + pre.deaths, 0), // 死者
    prefectures[12].discharge // 自宅療養
  ];

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://apexcharts.com/">
            ApexCharts
          </a>
        </Mui.Typography>
        <Chart options={options} series={series} type="donut" height={1200} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
