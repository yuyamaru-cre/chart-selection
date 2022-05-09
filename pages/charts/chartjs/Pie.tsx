import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 1
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const
    },
    title: {
      display: true,
      text: "都道府県別感染者数"
    }
  }
};

export const ChartjsPie: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const data = {
    labels: prefectures.map((pre: any) => pre.name_ja),
    datasets: [
      {
        label: "件数",
        data: prefectures.map((pre: any) => pre.cases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
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
        <Bar options={options} data={data} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
