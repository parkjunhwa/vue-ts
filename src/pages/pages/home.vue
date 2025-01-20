<script setup lang="ts">
import TypographyHeadlines from "@/views/pages/typography/TypographyHeadlines.vue";
import TypographyTexts from "@/views/pages/typography/TypographyTexts.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-2 pt-0 help-center-breadcrumbs"
      :items="[
        { title: 'Home', to: { name: 'pages-home' }, class: 'text-primary' },
        { title: '제목' },
      ]"
    />
  </div>
  <div
    class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"
  >
    <div class="d-flex flex-column justify-center">
      <h4 class="text-h4 font-weight-medium">제목</h4>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn color="secondary">취소</VBtn>
      <VBtn color="primary">저장</VBtn>
    </div>
  </div>

  <VRow>
    <VCol cols="12">
      <TypographyHeadlines />
    </VCol>

    <VCol cols="12">
      <TypographyTexts />
    </VCol>
  </VRow>
</template>
