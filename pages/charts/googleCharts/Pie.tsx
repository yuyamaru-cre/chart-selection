import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
import { Chart } from "react-google-charts";

const options = {
  title: "東京都の感染者の割合",
  // bar: { groupWidth: "95%" },
  // legend: { position: "none" }
  pieHole: 0.4,
  is3D: false
};

export const GoogleChartsPie: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const data = [
    ["Task", "Hours per Day"],
    ["入院", prefectures[12].hospitalize],
    ["自宅療養", prefectures[12].discharge]
  ];

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://www.react-google-charts.com/">
            GoogleCharts
          </a>
        </Mui.Typography>
        <Chart
          chartType="PieChart"
          width="100%"
          data={data}
          options={options}
        />
      </Mui.Paper>
    </Mui.Grid>
  );
};
