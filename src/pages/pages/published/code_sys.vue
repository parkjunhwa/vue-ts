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
        { title: '코드관리' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">코드관리</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="primary">신규등록</VBtn>
    </div>
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
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            코드 리스트
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" variant="outlined" color="secondary"
            ><VIcon start icon="tabler-minus" />삭제</VBtn
          >
        </div>
      </STitleArea>

      <VCard class="side-card">
        <VCardText>
          <VDataTable
            :headers="headers"
            :items="tabledata"
            density="compact"
            class="text-no-wrap"
            fixed-header
            style="max-height: 314px; min-height: calc(100vh - 234px)"
            hide-default-footer
          >
            <thead>
              <tr>
                <th><VCheckbox /></th>
                <th>그룹코드</th>
                <th>그룹코드명</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style="min-width: 60px; width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
              </tr>
              <tr>
                <td style="min-width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
              </tr>
              <tr>
                <td style="min-width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
              </tr>
              <tr>
                <td style="min-width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
              </tr>
              <tr>
                <td style="min-width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
              </tr>
              <tr>
                <td style="min-width: 60px"><VCheckbox /></td>
                <td>IDIDIDID</td>
                <td>관리자 승인</td>
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
                코드그룹 상세정보
              </h5>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small">저장</VBtn>
            </div>
          </STitleArea>
          <BottomTotalArea>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField
                label="그룹코드"
                type="text"
                readonly
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField
                label="그룹코드명"
                type="text"
                class="required"
                value="관리자 승인"
              />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField label="필드 캡션1" />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField label="필드 캡션2" />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField label="필드 캡션3" />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField label="필드 캡션4" />
            </VCol>
            <VCol cols="12" lg="12" md="12" sm="12" xs="12">
              <AppTextField label="필드 캡션5" />
            </VCol>
            <VCol cols="12" lg="12" md="12" sm="12" xs="12">
              <AppTextarea label="비고" />
            </VCol>
          </BottomTotalArea>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h5 class="d-flex text-h5 font-weight-medium align-center">
                코드 상세정보 리스트
              </h5>
            </div>

            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small" variant="outlined" color="secondary"
                ><VIcon start icon="tabler-minus" />삭제</VBtn
              >
              <VBtn size="small" variant="outlined" color="secondary"
                ><VIcon start icon="tabler-plus" />추가</VBtn
              >
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
                style="max-height: 314px; min-height: 314px"
                hide-default-footer
              >
                <thead>
                  <tr>
                    <th><VCheckbox /></th>
                    <th>세부코드</th>
                    <th>코드명</th>
                    <th>정렬순서</th>
                    <th>사용여부</th>
                    <th>필드캡션1</th>
                    <th>필드캡션2</th>
                    <th>필드캡션3</th>
                    <th>필드캡션4</th>
                    <th>필드캡션5</th>
                    <th>비고</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                  <tr>
                    <td style="min-width: 60px"><VCheckbox /></td>
                    <td>A1</td>
                    <td>승인</td>
                    <td>1</td>
                    <td style="min-width: 100px">
                      <AppSelect
                        :items="items"
                        v-model="selectedItem"
                        density="compact"
                      />
                    </td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용</td>
                    <td>내용내용내용내용내용내용</td>
                  </tr>
                </tbody>
              </VDataTable>
            </VCardText>
          </VCard>
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

@media (max-width: 960px) {
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
</style>
