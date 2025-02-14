<script setup lang="ts">
const dateRange = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  dateRange.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
    prepend-inner-icon="tabler-calendar-minus"
    clearable
    @keydown.esc="onClear"
  />
</template>
