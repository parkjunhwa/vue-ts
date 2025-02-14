<script setup lang="ts">
const time = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  time.value = "";
};
</script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="시간 선택"
    prepend-inner-icon="tabler-clock"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
    clearable
    @keydown.esc="onClear"
  />
</template>
