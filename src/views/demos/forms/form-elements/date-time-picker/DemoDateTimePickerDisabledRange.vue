<script setup lang="ts">
const now = new Date();
const currentMonth = now.toLocaleString("default", { month: "2-digit" });
const currentYear = now.getFullYear();
const date = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  date.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="날자 선택"
    :config="{
      dateFormat: 'Y-m-d',
      disable: [
        {
          from: `${currentYear}-${currentMonth}-20`,
          to: `${currentYear}-${currentMonth}-25`,
        },
      ],
    }"
    clearable
    @keydown.esc="onClear"
  />
</template>
