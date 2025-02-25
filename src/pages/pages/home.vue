<script setup>
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import { ref } from "vue";

const selectedValue = ref(10); // 기본값을 10으로 설정
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        { title: 'Home', to: { name: 'pages-home' }, class: 'text-primary' },
        { title: '제목' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">제목</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="secondary">취소</VBtn>
      <VBtn size="large" color="primary">저장</VBtn>
    </div>
  </TitleArea>
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
        <VCol cols="12" class="d-flex flex-wrap justify-center">
          <div class="d-flex gap-2 mt-2 flex-wrap justify-center w-100">
            <VBtn color="secondary">취소</VBtn>
            <VBtn color="primary">저장</VBtn>
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            주문등록
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" color="secondary" variant="tonal"> 취소 </VBtn>
          <VBtn size="small"> 저장 </VBtn>
        </div>
      </STitleArea>
      <DemoDataTableCardInfinity />
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
