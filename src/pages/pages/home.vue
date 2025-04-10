<script setup>
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import Alert001 from "@/pages/pages/published/alert/alert001.vue";
import Alert002 from "@/pages/pages/published/alert/alert002.vue";
import Alert003 from "@/pages/pages/published/alert/alert003.vue";
import Alert004 from "@/pages/pages/published/alert/alert004.vue";
import Alert005 from "@/pages/pages/published/alert/alert005.vue";
import Alert006 from "@/pages/pages/published/alert/alert006.vue";
import Alert007 from "@/pages/pages/published/alert/alert007.vue";
import Alert008 from "@/pages/pages/published/alert/alert008.vue";
import Popup001 from "@/pages/pages/published/popup/popup001.vue";
import Popup002 from "@/pages/pages/published/popup/popup002.vue";
import Popup003 from "@/pages/pages/published/popup/popup003.vue";
import Popup004 from "@/pages/pages/published/popup/popup004.vue";
import Popup005 from "@/pages/pages/published/popup/popup005.vue";
import Popup006 from "@/pages/pages/published/popup/popup006.vue";
import Popup007 from "@/pages/pages/published/popup/popup007.vue";
import Popup008 from "@/pages/pages/published/popup/popup008.vue";
import Popup009 from "@/pages/pages/published/popup/popup009.vue";
import Popup010 from "@/pages/pages/published/popup/popup010.vue";
import Popup011 from "@/pages/pages/published/popup/popup011.vue";
import Popup012 from "@/pages/pages/published/popup/popup012.vue";
import Popup013 from "@/pages/pages/published/popup/popup013.vue";
import Popup014 from "@/pages/pages/published/popup/popup014.vue";
import Popup015 from "@/pages/pages/published/popup/popup015.vue";
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
            <VBtn variant="outlined" color="secondary">취소</VBtn>
            <VBtn color="primary">저장</VBtn>
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <div class="d-flex justify-start flex-wrap">
        <h5 class="d-flex text-h5 font-weight-medium align-center">팝업목록</h5>
      </div>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="d-flex flex-wrap gap-2">
      <Popup001 />
      <Popup002 />
      <Popup003 />
      <Popup004 />
      <Popup005 />
      <Popup006 />
      <Popup007 />
      <Popup008 />
      <Popup009 />
      <Popup010 />
      <Popup011 />
      <Popup012 />
      <Popup013 />
      <Popup014 />
      <Popup015 />
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <div class="d-flex justify-start flex-wrap">
        <h5 class="d-flex text-h5 font-weight-medium align-center">얼럿</h5>
      </div>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="d-flex flex-wrap gap-2">
      <Alert001 />
      <Alert002 />
      <Alert003 />
      <Alert004 />
      <Alert005 />
      <Alert006 />
      <Alert007 />
      <Alert008 />
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
