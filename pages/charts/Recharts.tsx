import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../entities/covid19/query";
import { LineChart, Line } from "recharts";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

export const Recharts: React.VFC = () => {
  // const prefectures = useCovid19PrefecturesQuery().getValue();

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://recharts.org/en-US">
            Recharts
          </a>
        </Mui.Typography>
        {/* <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart> */}
        ※ 横の棒グラフの実装、その他オプションの設定が複雑なため使いにくい
      </Mui.Paper>
    </Mui.Grid>
  );
};
