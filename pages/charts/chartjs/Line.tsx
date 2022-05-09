import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19TotalQuery } from "../../../entities/covid19/query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    bar: {
      borderWidth: 1
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "都道府県別感染者数"
    }
  }
};

export const ChartjsLine: React.VFC = () => {
  const total = useCovid19TotalQuery().getValue();
  const total04 = total.filter((value: any) => value.date > 20220401);

  const data = {
    labels: total04.map((value: any) => value.date),
    datasets: [
      {
        label: "症状確認中",
        data: total04.map((value: any) => value.symptom_confirming)
      },
      {
        label: "重症",
        data: total04.map((value: any) => value.severe)
      }
    ]
  };

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://react-chartjs-2.netlify.app/">
            Chartjs
          </a>
        </Mui.Typography>
        <Line options={options} data={data} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
