<script setup>
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
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
        {
          title: 'Home',
          to: { name: 'pages-home' },
        },
        { title: '마스터관리' },
        { title: '제품마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">제품마스터</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="검색할 키워드를 입력하세요."
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded"
          ><VRadioGroup v-model="inlineRadio" inline>
            <VRadio label="전체" value="radio-1" />
            <VRadio label="OTC" value="radio-2" />
            <VRadio label="ETC" value="radio-3" /> </VRadioGroup
        ></VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-end w-100">
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
  </VRow>
  <VRow>
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            제품 리스트
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small">저장</VBtn>
        </div>
      </STitleArea>
      <VCard class="basic-table-card">
        <VCardText>
          <VDataTable
            :headers="headers"
            :items="tabledata"
            density="compact"
            class="text-no-wrap"
            fixed-header
            style="max-height: 397px"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>품목유형</th>
                <th>품목범주그룹</th>
                <th>제품그룹코드</th>
                <th>제품군</th>
                <th>제품코드</th>
                <th>제품명1</th>
                <th>제품명2</th>
                <th>표시규격</th>
                <th>표준코드</th>
                <th>대표품목코드</th>
                <th>보험코드</th>
                <th>관리품목</th>
                <th>재고부족품목</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
              <tr>
                <td>제품</td>
                <td>PRODUCT</td>
                <td>20</td>
                <td>221</td>
                <td>ACM101</td>
                <td>명인아캄프로세이트정333mg 30T</td>
                <td>명인아캄프로세이트정333mg</td>
                <td>180C</td>
                <td>8806519047411</td>
                <td>8806519047411</td>
                <td>651904740</td>
                <td><VCheckbox /></td>
                <td><VCheckbox /></td>
              </tr>
            </tbody>
          </VDataTable>
          <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
            <VBtn size="small" color="secondary" variant="tonal">
              <VIcon start icon="tabler-plus" />
              더보기
            </VBtn>
          </div>
        </VCardText>
      </VCard>
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

<style lang="scss" scoped>
.basic-table-card {
  .v-card-text {
    padding: 16px;
  }
}
</style>
