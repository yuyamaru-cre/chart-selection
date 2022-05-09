import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../../entities/covid19/query";
import { Chart } from "react-google-charts";

const options = {
  title: "都道府県別感染者数",
  hAxis: {
    minValue: 0
  },
  legend: "top",
  is3D: false,
  // backgroundColor: "red",
  colors: ["red"],
  /*
   * 全体の高さ & 中身の高さ - 余白 で棒の太さが変わっていく
   */
  // 余白の調整
  bar: { groupWidth: "80%" },
  // 全体の高さ
  height: "1000",
  // 中身の高さ
  chartArea: { height: 1000 }
};

export const GoogleChartsHorizontalBar: React.VFC = () => {
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
          height="100%"
          data={data}
          options={options}
        />
      </Mui.Paper>
    </Mui.Grid>
  );
};
