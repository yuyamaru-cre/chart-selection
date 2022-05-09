import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19TotalQuery } from "../../../entities/covid19/query";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const initOptions = {
  chart: {
    id: "line"
  }
};

export const ApexChartsLine: React.VFC = () => {
  const total = useCovid19TotalQuery().getValue();
  const total04 = total.filter((value: any) => value.date > 20220401);

  const options = {
    ...initOptions,
    xaxis: {
      categories: total04.map((value: any) => value.date)
    },
    chart: {
      toolbar: {
        show: false
      }
    }
  };

  const series = [
    {
      name: "症状確認中",
      data: total04.map((value: any) => value.symptom_confirming)
    },
    {
      name: "重症",
      data: total04.map((value: any) => value.severe)
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
        <Chart options={options} series={series} type="line" height={1200} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
