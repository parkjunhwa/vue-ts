<template>
  <VCard class="botttom-total-area">
    <VRow>
      <slot></slot>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.botttom-total-area {
  padding: 28px;
  border: 1px solid var(--color-gray-gray-600);
  overflow: visible;
}
</style>
