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
    placeholder="날자 선택"
    prefix="조회기간"
    :config="{ mode: 'range' }"
    prepend-inner-icon="tabler-calendar-event"
    clearable
    @keydown.esc="onClear"
  />
</template>
