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
    label="Human Friendly"
    placeholder="날자 선택"
    :config="{ dateFormat: 'F j, Y' }"
    clearable
    @keydown.esc="onClear"
  />
</template>
