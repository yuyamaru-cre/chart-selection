import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../entities/covid19/query";
import { Chart } from "react-google-charts";

const options = {
  title: "都道府県別感染者数",
  hAxis: {
    minValue: 0
  },
  height: 1000
  // bar: { groupWidth: "95%" },
  // legend: { position: "none" }
};

export const GoogleCharts: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  const data = [["都道府県", "件数"]];
  prefectures.forEach((pref: any) => {
    const lowDate = [pref.name_ja, pref.cases];
    data.push(lowDate);
  });

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://www.react-google-charts.com/">
            GoogleCharts
          </a>
        </Mui.Typography>
        <Chart
          chartType="BarChart"
          width="100%"
          data={data}
          options={options}
        />
      </Mui.Paper>
    </Mui.Grid>
  );
};
