<script setup lang="ts">
const date = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  date.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    clearable
    label="Date & TIme"
    placeholder="날자, 시간 선택"
    prepend-inner-icon="tabler-calendar-time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
    @keydown.esc="onClear"
  />
</template>
