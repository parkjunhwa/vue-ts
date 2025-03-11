<script setup>
import TitleArea from "@/layouts/components/TitleArea.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-arrow-left" />
    <router-link to="-1" class="text-secondary">이전</router-link>
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        거래처마스터
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
</template>

<style lang="scss" scoped></style>
