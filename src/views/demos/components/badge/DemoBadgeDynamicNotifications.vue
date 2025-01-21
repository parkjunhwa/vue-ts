<script lang="ts" setup>
const notifications = ref<number>();
</script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon size="40" icon="tabler-brand-vue" />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        메시지 보내기
      </VBtn>

      <VBtn color="error" @click="notifications = 0"> 알림 초기화 </VBtn>
    </div>
  </div>
</template>
