<template>
  <div id="app">
    <h1>Demo ChartJs Library</h1>
    <h2>Line Graph</h2>
    <canvas id="planet-chart"></canvas>
    <h2>Mix graph</h2>
    <canvas id="planet-chart-bis"></canvas>
    <h2>Bar graph</h2>
    <canvas id="planet-chart-ter"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

import planetChartData from "../data/chart-data";
import planetChartDataBis from "../data/chart-data-bis";
import planetChartDataTer from "../data/chart-data-ter";

export default {
  name: "app",
  data() {
    return {
      planetChartData: planetChartData,
      planetChartDataBis: planetChartDataBis,
      planetChartDataTer: planetChartDataTer,
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
    this.createChart("planet-chart-bis", this.planetChartDataBis);
    this.createChart("planet-chart-ter", this.planetChartDataTer);
  },
};
</script>
