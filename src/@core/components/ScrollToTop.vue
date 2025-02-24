<script setup lang="ts">
const { y } = useWindowScroll();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <VScaleTransition
    style="transform-origin: center"
    class="scroll-to-top d-print-none"
  >
    <VBtn v-show="y > 200" icon density="comfortable" @click="scrollToTop">
      <VIcon size="22" icon="tabler-arrow-up" />
    </VBtn>
  </VScaleTransition>
</template>

<style lang="scss">
.scroll-to-top {
  position: fixed !important;

  // To keep button on top of v-layout. E.g. Email app
  z-index: 999;
  inset-block-end: 24px;
  inset-inline-end: 24px;

  @media (max-width: 600px) {
    inset-block-end: 16px;
    inset-inline-end: 16px;
  }
}
</style>
