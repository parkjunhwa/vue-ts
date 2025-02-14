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
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
    clearable
    @keydown.esc="onClear"
  />
</template>
