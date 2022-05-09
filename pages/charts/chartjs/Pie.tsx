import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
    labels: ["入院", "自宅療養"],
    datasets: [
      {
        data: [prefectures[12].hospitalize, prefectures[12].discharge],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"]
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
        <Doughnut options={options} data={data} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
