<script setup>
import TitleArea from "@/layouts/components/TitleArea.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        {
          title: 'Home',
          to: { name: 'pages-home' },
        },
        { title: '마스터관리' },
        { title: '단가마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">단가마스터</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
</template>

<style lang="scss" scoped></style>
