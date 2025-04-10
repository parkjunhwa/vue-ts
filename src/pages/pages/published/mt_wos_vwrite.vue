<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
const selectedItem = ref("Y");
const items = ["Y", "N"];
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
        { title: '도매상마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        도매상마스터
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="거래처코드, 거래처명을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="9" md="9" sm="12" xs="12" v-show="expanded">
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
    <VCol cols="12" lg="3" class="sticky-area">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            도매상 리스트
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>

      <VCard class="side-card">
        <VCardText
          ><VDataTable
            :headers="headers"
            :items="tabledata"
            density="compact"
            class="text-no-wrap"
            fixed-header
            style="max-height: 314px; min-height: calc(100vh - 260px)"
            hide-default-footer
          >
            <thead>
              <tr>
                <th>도매상코드</th>
                <th>도매상명명</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
              </tr>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
              </tr>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
              </tr>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
              </tr>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
              </tr>
              <tr>
                <td>IDIDIDID</td>
                <td>거래처(매출처)명</td>
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
    <VCol cols="12" lg="9" md="12" sm="12" xs="12">
      <VRow>
        <VCol cols="12">
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h5 class="d-flex text-h5 font-weight-medium align-center">
                도매상 상세 정보
              </h5>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small">저장</VBtn>
            </div>
          </STitleArea>
          <BottomTotalArea>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="도매상코드"
                type="text"
                value="IDIDID"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="도매상명"
                type="text"
                value="도매상명 출력"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="도매상ID"
                type="text"
                value="IDIDID"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="새 비밀번호"
                type="password"
                value="******"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="새 비밀번호 확인"
                type="password"
                value="******"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="이메일 주소"
                type="text"
                value="asdfg@mail.co.kr"
                readonly
                class="required"
              />
            </VCol>
          </BottomTotalArea>
        </VCol>
      </VRow>
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
.sticky-area {
  position: sticky;
  top: 60px;
  z-index: 10; /* 다른 요소 위에 고정되도록 설정 */
  @media (max-width: 1280px) {
    position: relative;
    top: 0px;
    z-index: 1;
    .v-data-table {
      max-height: auto !important;
      min-height: auto !important;
    }
  }
}
.card-table-infinity,
.v-container,
.v-row {
  overflow: visible !important;
  align-items: flex-start;
  position: static !important;
}
</style>
