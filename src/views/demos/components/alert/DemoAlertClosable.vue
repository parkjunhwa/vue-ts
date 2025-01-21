<script lang="ts" setup>
const isAlertVisible = ref(true);
</script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn v-if="!isAlertVisible" @click="isAlertVisible = true"> Reset </VBtn>
  </div>
</template>
