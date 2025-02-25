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
    label="Default"
    prepend-inner-icon="tabler-calendar-event"
    placeholder="날자 선택"
    clearable
    @keydown.esc="onClear"
  />
</template>
