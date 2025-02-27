<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import { ref } from "vue";
const inputValue = ref("");

const onClear = () => {
  inputValue.value = "";
};
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        { title: 'Home', to: { name: 'pages-home' }, class: 'text-primary' },
        { title: '주문등록' },
      ]"
    />
  </div>
  <div
    class="page-title-area d-flex flex-wrap justify-start justify-sm-space-between gap-x-6 mb-6 align-items-center"
  >
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">주문등록</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="secondary">임시저장</VBtn>
      <VBtn size="large" color="primary">주문등록</VBtn>
    </div>
  </div>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="거래코드, 거래처명을 선택하세요."
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="간납코드,간납처명을 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="원외처방제를 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="배송지 주소를 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="text"
            placeholder="Placeholder Text"
            value="배송지 상세주소 출력"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="inputValue"
            placeholder="배송요청 사항을 입력하세요."
            clearable
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="text"
            prefix="현잔고"
            suffix="원"
            value="111,111,000"
            class="text-right"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            v-model="text"
            prefix="OTC회전여부"
            value="이상없음"
            class="text-right"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            v-model="text"
            prefix="ETC회전여부"
            value="회전초과"
            class="text-right"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            v-model="text"
            prefix="여신여부"
            value="여신초과"
            class="text-right"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <VBtn variant="outlined"> 거래내역 조회 </VBtn>
        </VCol>
        <VCol cols="12" class="free-type" v-show="expanded">
          <AppTextField
            v-model="text"
            prefix="현잔고"
            suffix="원"
            value="111,111,000"
            class="text-right"
            readonly
            style="min-width: 180px"
          />
          <AppTextField
            v-model="text"
            prefix="OTC회전여부"
            value="이상없음"
            class="text-right"
            readonly
            style="min-width: 180px"
          />
          <AppTextField
            v-model="text"
            prefix="ETC회전여부"
            value="회전초과"
            class="text-right"
            readonly
            style="min-width: 180px"
          />
          <AppTextField
            v-model="text"
            prefix="여신여부"
            value="여신초과"
            class="text-right"
            readonly
            style="min-width: 180px"
          />
          <VBtn variant="tonal" style="min-width: 120px"> 거래내역 조회 </VBtn>
        </VCol>

        <VCol cols="12" class="d-flex flex-wrap justify-center">
          <div class="d-flex gap-2 flex-wrap justify-center w-100">
            <VBtn variant="outlined" color="secondary"
              ><VIcon start icon="tabler-refresh" />초기화</VBtn
            >
            <VBtn color="primary"
              ><VIcon start icon="tabler-search" />조회</VBtn
            >
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

    <VCol cols="12" class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            반품 정보 등록
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" color="secondary" variant="tonal"> 선택삭제 </VBtn>
          <VBtn size="small">반품추가</VBtn>
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
      expanded: true,
      values: "",
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>
