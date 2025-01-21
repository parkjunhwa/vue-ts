<script lang="ts" setup>
const isAlertVisible = ref(true);
</script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert v-model="isAlertVisible" color="warning" variant="tonal">
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "알림 숨기기" : "알림 보이기" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
