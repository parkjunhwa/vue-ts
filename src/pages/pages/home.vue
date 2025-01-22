<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import TypographyHeadlines from "@/views/pages/typography/TypographyHeadlines.vue";
import TypographyTexts from "@/views/pages/typography/TypographyTexts.vue";
</script>

<template>
  <div class="page-title-area d-flex flex-wrap justify-start mb-2">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        { title: 'Home', to: { name: 'pages-home' }, class: 'text-primary' },
        { title: '제목' },
      ]"
    />
  </div>
  <div
    class="d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6"
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
      <TopSearchArea v-model:expanded="expanded">
        <VCol lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>

        <VCol lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
            density="compact"
          />
        </VCol>
        <VCol cols="12" class="d-flex flex-wrap justify-center gap-x-6">
          <div class="d-flex gap-4 flex-wrap justify-center">
            <VBtn size="small" color="secondary">취소</VBtn>
            <VBtn size="small" color="primary">저장</VBtn>
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>

    <VCol cols="12">
      <TypographyHeadlines />
    </VCol>

    <VCol cols="12">
      <TypographyTexts />
    </VCol>
  </VRow>
</template>

<script>
export default {
  data() {
    return {
      expanded: false, // Now 'expanded' is defined in the parent
      values: "",
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "Field is required"],
    };
  },
};
</script>
