<script lang="ts" setup>
const alertShadow = ref(5)
</script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
    class="mb-2"
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>
</template>
