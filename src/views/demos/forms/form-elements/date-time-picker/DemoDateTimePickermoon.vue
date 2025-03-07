<script setup lang="ts">
const moon = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  moon.value = "";
};
</script>

<template>
  <AppMoonPicker
    v-model="moon"
    placeholder="월 선택"
    prefix="조회기간"
    prepend-inner-icon="tabler-calendar-event"
    moon
    clearable
    range
    @keydown.esc="onClear"
  />
</template>
