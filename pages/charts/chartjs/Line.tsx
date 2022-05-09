import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
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
        <Line options={options} data={data} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
