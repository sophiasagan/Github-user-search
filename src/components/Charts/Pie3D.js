import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "pie3d",
    width: '100%',
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption:'Languages',
        theme:'candy',
        decimals: 0,
        pieRadius: "40%",
        // paletteColors: '#f0db4f', 
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
