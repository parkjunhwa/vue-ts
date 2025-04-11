<script lang="ts" setup>
import { computed } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";

// Vuetify 테마 연동
const vuetifyTheme = useTheme();

// X축 월별 라벨
const categories = [
  "24.03",
  "24.04",
  "24.05",
  "24.06",
  "24.07",
  "24.08",
  "24.09",
  "24.10",
  "24.11",
  "24.12",
  "25.01",
  "25.02",
];

// 임의의 예시 데이터 (단위: 천원)
const series = [
  {
    name: "판매목표",
    data: [
      100000, 120000, 130000, 110000, 150000, 160000, 140000, 170000, 180000,
      190000, 200000, 210000,
    ],
  },
  {
    name: "판매실적",
    data: [
      90000, 115000, 125000, 105000, 148000, 150000, 135000, 165000, 175000,
      185000, 195000, 205000,
    ],
  },
  {
    name: "수금목표",
    data: [
      80000, 110000, 120000, 100000, 140000, 155000, 130000, 160000, 170000,
      180000, 190000, 200000,
    ],
  },
  {
    name: "수금실적",
    data: [
      75000, 105000, 115000, 95000, 138000, 150000, 128000, 155000, 165000,
      175000, 185000, 195000,
    ],
  },
];

// ApexChart 설정
const chartOptions = computed(() => {
  const theme = vuetifyTheme.current.value;

  return {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "65%",
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: {
        text: "(단위: 천원)",
        style: {
          fontSize: "14px",
        },
      },
      min: 0,
      max: 300000,
      tickAmount: 6, // 6개 눈금 = 50,000 단위
      labels: {
        formatter: (val: number) => val.toLocaleString(),
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val.toLocaleString()} 천원`,
      },
    },
    colors: [
      "rgba(255, 76, 81, 0.38)",
      "rgba(0, 144, 255, 0.38)",
      "rgba(40, 199, 111, 0.38)",
      "rgba(0, 186, 209, 0.38)",
    ],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };
});
</script>

<template>
  <VueApexCharts
    type="bar"
    height="300"
    :options="chartOptions"
    :series="series"
  />
</template>
