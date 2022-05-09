import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const initOptions = {
  chart: {
    width: 380,
    type: "pie"
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
    labels: prefectures.map((pre: any) => pre.name_ja)
  };

  const series = prefectures.map((pre: any) => pre.cases);

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://apexcharts.com/">
            ApexCharts
          </a>
        </Mui.Typography>
        <Chart options={options} series={series} type="pie" height={1200} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
