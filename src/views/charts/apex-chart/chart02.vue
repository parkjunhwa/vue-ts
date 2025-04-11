<script lang="ts" setup>
import { computed } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();

const categories = [
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
  "사원명",
];

const series = [
  {
    name: "판매목표",
    type: "bar",
    yAxisIndex: 0,
    data: [
      200000, 195000, 205000, 198000, 202000, 200000, 210000, 199000, 203000,
      207000, 195000, 200000,
    ],
  },
  {
    name: "ETC실적",
    type: "bar",
    yAxisIndex: 0,
    data: [
      160000, 175000, 180000, 150000, 170000, 165000, 180000, 175000, 160000,
      178000, 170000, 180000,
    ],
  },
  {
    name: "OTC실적",
    type: "bar",
    yAxisIndex: 0,
    data: [
      155000, 160000, 175000, 158000, 165000, 168000, 170000, 160000, 172000,
      175000, 169000, 177000,
    ],
  },
  {
    name: "달성률",
    type: "line",
    yAxisIndex: 3,
    data: [45, 50, 52, 48, 55, 53, 58, 50, 49, 57, 46, 51],
  },
];

const chartOptions = computed(() => {
  const theme = vuetifyTheme.current.value;

  return {
    chart: {
      stacked: false,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 0, 0, 3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: [
      {
        title: { text: "(단위: 천원)" },
        labels: {
          formatter: (val: number) => val.toLocaleString(),
        },
        min: 0,
        max: 300000,
        tickAmount: 6,
      },
      { show: false }, // ETC실적 (yAxisIndex: 1, 숨김)
      { show: false }, // OTC실적 (yAxisIndex: 2, 숨김)
      {
        opposite: true,
        title: { text: "달성률 (%)" },
        labels: {
          formatter: (val: number) => `${val}%`,
        },
        min: 0,
        max: 100,
        tickAmount: 5,
      },
    ],
    tooltip: {
      shared: true,
      y: [
        {
          formatter: (val: number) => `${val.toLocaleString()} 천원`,
        },
        {
          formatter: (val: number) => `${val.toLocaleString()} 천원`,
        },
        {
          formatter: (val: number) => `${val.toLocaleString()} 천원`,
        },
        {
          formatter: (val: number) => `${val}%`,
        },
      ],
    },
    colors: [
      "rgba(255, 159, 67, 0.38)", // 판매목표
      "rgba(0, 144, 255, 0.38)", // ETC실적
      "rgba(40, 199, 111, 0.38)", // OTC실적
      "rgba(255, 76, 81, 0.38)", // 달성률
    ],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };
});
</script>

<template>
  <VueApexCharts height="300" :options="chartOptions" :series="series" />
</template>
