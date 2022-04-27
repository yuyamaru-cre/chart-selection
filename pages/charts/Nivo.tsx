import React from "react";
import * as Mui from "@material-ui/core";
import { useCovid19PrefecturesQuery } from "../../entities/covid19/query";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    donut: 102,
    donutColor: "hsl(246, 70%, 50%)"
  },
  {
    country: "AE",
    donut: 191,
    donutColor: "hsl(304, 70%, 50%)"
  },
  {
    country: "AF",
    donut: 95,
    donutColor: "hsl(52, 70%, 50%)"
  },
  {
    country: "AG",
    donut: 62,
    donutColor: "hsl(137, 70%, 50%)"
  },
  {
    country: "AI",
    donut: 151,
    donutColor: "hsl(304, 70%, 50%)"
  },
  {
    country: "AL",
    donut: 75,
    donutColor: "hsl(142, 70%, 50%)"
  },
  {
    country: "AM",
    donut: 158,
    donutColor: "hsl(159, 70%, 50%)"
  }
];

export const Nivo: React.VFC = () => {
  const prefectures = useCovid19PrefecturesQuery().getValue();

  return (
    <Mui.Grid item xs={12}>
      <Mui.Paper style={{ padding: 10 }}>
        <Mui.Typography component="h5" variant="subtitle1">
          <a target="_blank" href="https://nivo.rocks/">
            Nivo
          </a>
        </Mui.Typography>
        <ResponsiveBar
          data={data}
          keys={["donut"]}
          padding={0.3}
          layout="horizontal"
        />
      </Mui.Paper>
    </Mui.Grid>
  );
};
