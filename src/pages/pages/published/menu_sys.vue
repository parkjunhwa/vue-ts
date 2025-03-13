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
          to: { name: 'pages-published-collectpay-vwrite' },
        },
        { title: '시스템관리' },
        { title: '메뉴관리' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">메뉴관리</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="3" md="3" sm="12" xs="12">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="그룹코드, 그룹명을 검색하세요."
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
      <!-- md이하 모드에서 숨김-->
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            메뉴정보
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>

      <VCard class="side-card">
        <VCardText>1 </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" lg="9" md="12" sm="12" xs="12">
      <VRow>
        <VCol cols="12">
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h5 class="d-flex text-h5 font-weight-medium align-center">
                메뉴 정보 변경
              </h5>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small">저장</VBtn>
            </div>
          </STitleArea>
          <BottomTotalArea>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="화면ID"
                type="text"
                readonly
                value="order_list"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12" class="breadcrumb">
              <div class="app-text-field flex-grow-1">
                <label
                  class="v-label mb-1 text-body-2 text-wrap"
                  style="line-height: 15px"
                  >메뉴명
                </label>
                <ul
                  class="v-breadcrumbs v-breadcrumbs--density-default px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
                  style="line-height: 38px"
                >
                  <li class="v-breadcrumbs-item">메인</li>
                  <li class="v-breadcrumbs-divider">/</li>
                  <li class="v-breadcrumbs-item">시스템관리</li>
                  <li class="v-breadcrumbs-divider">/</li>
                  <li class="v-breadcrumbs-item v-breadcrumbs-item--disabled">
                    메뉴관리
                  </li>
                </ul>
              </div>
            </VCol>
            <VCol
              cols="12"
              lg="4"
              md="4"
              sm="12"
              xs="12"
              class="flex-input-area"
            >
              <AppTextField
                label=""
                type="text"
                value="주문내역조회"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppTextField
                label="정렬순서"
                type="number"
                value="1"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppSelect
                label="사용여부"
                :items="items"
                v-model="selectedItem"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="4" md="4" sm="12" xs="12">
              <AppSelect
                label="화면속성"
                :items="items"
                readonly
                v-model="selectedItem"
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
.app-picker-field {
  flex: 1;
}
.breadcrumb {
  flex: 0 0 auto;
  max-width: max-content;
}
.flex-input-area {
  display: flex;
  align-items: flex-end;
  flex: 1;
  min-width: 33.333%;
  max-width: 100%;
}

@media (max-width: 960px) {
  .breadcrumb {
    flex: 1;
    max-width: 100%;
  }
  .flex-input-area {
    flex: 1;
    min-width: 100%;
    max-width: 100%;
  }
}
.botttom-total-area {
  padding: 28px;
  display: flex;
  flex-direction: column !important;
}

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
.side-card {
  .v-card-text {
    padding: 16px;
  }
}
.basic-table-card {
  .v-card-text {
    padding: 16px;
  }
}
</style>
