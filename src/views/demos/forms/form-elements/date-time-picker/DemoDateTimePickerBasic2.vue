<script setup lang="ts">
import { ref, watch } from "vue";

const date = ref("");

watch(date, (newVal) => {
  if (!newVal) return;

  const ymdFormat = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  if (ymdFormat.test(newVal)) {
    date.value = `${newVal.slice(0, 4)}-${newVal.slice(4, 6)}-${newVal.slice(
      6,
      8
    )}`;
  }
});

// 입력 값 초기화 함수
const onClear = () => {
  date.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="날짜 선택"
    clearable
    clear-icon="tabler-x"
    append-inner-icon="tabler-calendar"
    :config="{ dateFormat: 'Y-m-d', allowInput: true }"
    @keydown.esc="onClear"
  />
</template>
