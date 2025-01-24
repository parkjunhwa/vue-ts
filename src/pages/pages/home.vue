<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2">
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
    class="page-title-area d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6 align-items-center"
  >
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">제목</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="secondary">취소</VBtn>
      <VBtn size="large" color="primary">저장</VBtn>
    </div>
  </div>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12" v-show="expanded">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>

        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <AppAutocomplete
            v-model="values"
            :items="items"
            :rules="nameRules"
            placeholder="Select Option"
          />
        </VCol>
        <VCol cols="12" class="d-flex flex-wrap justify-center gap-x-6">
          <div class="d-flex gap-4 flex-wrap justify-center w-100">
            <VBtn color="secondary">취소</VBtn>
            <VBtn color="primary">저장</VBtn>
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardItem>
          <VCardTitle>테이블제목</VCardTitle>
        </VCardItem>
        <DemoDataTableExternalPagination />
      </VCard>
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
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>
