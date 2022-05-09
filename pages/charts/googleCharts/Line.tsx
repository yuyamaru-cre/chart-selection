import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19TotalQuery } from "../../../entities/covid19/query";
import { Chart } from "react-google-charts";

const options = {
  title: "都道府県別感染者数"
};

export const GoogleChartsLine: React.VFC = () => {
  const total = useCovid19TotalQuery().getValue();
  const total04 = total.filter((value: any) => value.date > 20220401);

  const data = [["日付", "症状確認中", "重症"]];
  total04.forEach((value: any) => {
    const lowDate = [
      String(value.date),
      value.symptom_confirming,
      value.severe
    ];
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
        <Chart chartType="Line" width="100%" data={data} options={options} />
      </Mui.Paper>
    </Mui.Grid>
  );
};
