<script setup lang="ts">
const multipleDate = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  multipleDate.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    prepend-inner-icon="tabler-calendar-event"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
    clearable
    @keydown.esc="onClear"
  />
</template>
