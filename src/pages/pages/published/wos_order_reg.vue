<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
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
        { title: '주문' },
        { title: '주문등록' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">주문등록</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="secondary">임시저장</VBtn>
      <VBtn size="large" color="primary">주문등록</VBtn>
    </div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="false">
        <VCol cols="12">
          <div class="d-flex flex-column flex-md-row flex-wrap gap-2 w-100">
            <div class="top-search-order-start">
              <div class="item">
                <h6 class="d-flex text-h6 font-weight-medium align-center">
                  [IDIDID]로그인 거래처명
                </h6>
              </div>
              <div class="item" v-show="expanded">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">사업자번호</span>
                  </div>
                </VChip>
                <span class="item-text">1234567890</span>
              </div>
              <div class="item" v-show="expanded">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">대표자</span>
                  </div>
                </VChip>
                <span class="item-text">홍길동</span>
              </div>
            </div>
            <div class="top-search-order-end" v-show="expanded">
              <div class="item">
                <span class="item-title">지점명</span>
                <span class="item-text">1지부1팀</span>
              </div>
              <div class="item">
                <span class="item-title">담당자</span>
                <span class="item-text">김영업</span>
              </div>
            </div>
          </div>
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="간납처를 선택하세요."
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="원외처방처를 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>

        <VCol cols="12" lg="2" md="2" sm="12" xs="12" v-show="expanded">
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
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="inputValue"
            placeholder="배송요청 사항을 입력하세요."
            clearable
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          xs="12"
          class="col-5"
          v-show="expanded"
          ><AppTextField
            prefix="현재잔고"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
        /></VCol>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          xs="12"
          class="col-5"
          v-show="expanded"
          ><AppTextField
            prefix="미도래"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
        /></VCol>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          xs="12"
          class="col-5"
          v-show="expanded"
          ><AppTextField
            prefix="총대차"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
        /></VCol>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          xs="12"
          class="col-5"
          v-show="expanded"
          ><AppTextField
            prefix="담보금액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
        /></VCol>
        <VCol
          cols="12"
          lg="2"
          md="2"
          sm="12"
          xs="12"
          class="col-5"
          v-show="expanded"
          ><AppTextField
            prefix="잔여여신"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
        /></VCol>

        <VCol cols="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-center w-100">
            <VBtn variant="outlined" color="secondary"
              ><VIcon start icon="tabler-refresh" />초기화</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap align-center gap-2">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            제품 등록 리스트
          </h5>
          <p class="text-body-2 mb-0">
            ※ 신규품목이 있을 경우 : “품목 주문추가” 후 엑셀양식다운로드를
            진행하여 주세요.
          </p>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" variant="outlined"
            ><VIcon start icon="tabler-arrow-bar-to-down" />엑셀다운로드</VBtn
          >
          <VBtn size="small" variant="outlined"
            ><VIcon start icon="tabler-arrow-bar-to-up" />엑셀업로드</VBtn
          >
          <VBtn size="small"
            ><VIcon start icon="tabler-plus" />신규등록 주문추가</VBtn
          >
        </div>
      </STitleArea>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div
              class="d-flex flex-row flex-grow-1 gap-2 justify-content-start"
            >
              <div class="section01">
                <div class="item num02">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">유형</span>
                      <span class="item-text"> ETC-메디키넷</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num03" style="flex: none">
                  <span class="item-cell-title text-primary">
                    (IGT104) 이가탄에프캡슐</span
                  >
                </div>
              </div>
              <div class="section02">
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시주문번호</span>
                      <span class="item-text"> WIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num05">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">주문번호호</span>
                      <span class="item-text"> IDIDIDIDIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">규격</span>
                <span class="item-text">100C</span>
              </div>
              <div class="item">
                <span class="item-title">수량</span>
                <span class="item-text">
                  <AppTextField value="10" density="compact"
                /></span>
              </div>
              <div class="item">
                <span class="item-title">단가</span>
                <span class="item-text">50,000</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액</span>
                <span class="item-text">80,000</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div
              class="d-flex flex-row flex-grow-1 gap-2 justify-content-start"
            >
              <div class="section01">
                <div class="item num02">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">유형</span>
                      <span class="item-text"> ETC-메디키넷</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num03" style="flex: none">
                  <span class="item-cell-title text-primary">
                    (IGT104) 이가탄에프캡슐</span
                  >
                </div>
              </div>
              <div class="section02">
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시주문번호</span>
                      <span class="item-text"> WIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num05">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">주문번호호</span>
                      <span class="item-text"> IDIDIDIDIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">규격</span>
                <span class="item-text">100C</span>
              </div>
              <div class="item">
                <span class="item-title">수량</span>
                <span class="item-text">
                  <AppTextField value="10" density="compact"
                /></span>
              </div>
              <div class="item">
                <span class="item-title">단가</span>
                <span class="item-text">50,000</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액</span>
                <span class="item-text">80,000</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div
              class="d-flex flex-row flex-grow-1 gap-2 justify-content-start"
            >
              <div class="section01">
                <div class="item num02">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">유형</span>
                      <span class="item-text"> ETC-메디키넷</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num03" style="flex: none">
                  <span class="item-cell-title text-primary">
                    (IGT104) 이가탄에프캡슐</span
                  >
                </div>
              </div>
              <div class="section02">
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시주문번호</span>
                      <span class="item-text"> WIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
                <div class="item num05">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">주문번호호</span>
                      <span class="item-text"> IDIDIDIDIDIDIDIDIDID</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">규격</span>
                <span class="item-text">100C</span>
              </div>
              <div class="item">
                <span class="item-title">수량</span>
                <span class="item-text">
                  <AppTextField value="10" density="compact"
                /></span>
              </div>
              <div class="item">
                <span class="item-title">단가</span>
                <span class="item-text">50,000</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액</span>
                <span class="item-text">80,000</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <div class="d-flex mt-2 flex-wrap justify-center w-100 card-more-btn">
        <VBtn size="small" color="secondary" variant="tonal">
          <VIcon start icon="tabler-plus" />
          더보기
        </VBtn>
      </div>
    </VCol>
  </VRow>
  <VRow>
    <VCol>
      <BottomTotalArea>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="공급가액 합계"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="부가세합계"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="합계금액(VAT포함)"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
      </BottomTotalArea>
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
.card-table-infinity {
  .data {
    gap: 8px 16px;

    .gap-2 {
      gap: 4px 16px;
    }

    .justify-content-start {
      gap: 8px 16px;
      flex-wrap: wrap;
      align-items: center;

      .item {
        align-items: center;
        &.num01 {
          width: 24px;
          min-width: 24px;
          height: 24px;
          overflow: visible;

          :deep(.v-selection-control__wrapper) {
            margin: -6px;
          }
        }
        &.num03 {
          flex: 1;
        }
        &.num02,
        &.num04,
        &.num05 {
          .v-chip {
            width: 100%;
          }
        }
        &.num02 {
          width: 140px;
        }
        &.num04 {
          width: 180px;
        }
        &.num05 {
          width: 210px;
        }
      }
    }

    .justify-content-end {
      gap: 8px 16px;
      align-items: center;

      .item {
        width: 86px;
        align-items: center;
        &:nth-child(1) {
          width: 80px;
        }

        &:nth-child(2) {
          width: 100px;
          .item-text {
            width: 100%;
            max-width: 80px;
          }
          justify-content: space-between;
        }

        &:nth-child(3),
        &:nth-child(4) {
          justify-content: space-between;
        }

        &:nth-child(3) {
          width: 140px;
        }

        &:nth-child(4) {
          width: 150px;
        }
      }
    }
  }
}
.section01 {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row !important;
  flex: 1;
}
.section02 {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: row !important;
  justify-content: flex-end;
}
.top-search-order-start {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  flex: 1;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .item:nth-child(1) h6 {
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    width: max-content;
  }
}
.top-search-order-end {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
.col-5 {
  flex: 0 0 20%;
  max-width: 20%;
}
@media (max-width: 960px) {
  .justify-content-start {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;
    .section02 {
      gap: 8px;
    }
  }
  .top-search-order-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
  }

  .top-search-order-end {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: row !important;
    align-items: normal;
    justify-content: space-between;

    .item {
      width: calc(50% - 8px);
    }
  }
  .col-5 {
    flex: none;
    max-width: 100%;
  }

  .card-table-infinity {
    .data {
      .justify-content-start {
        flex-direction: column !important;
        justify-content: left;
        gap: 4px 8px;
        align-items: normal;
      }

      .justify-content-end {
        flex-direction: row !important;
        flex-wrap: wrap;
        gap: 4px 16px;
        .item {
          width: calc(50% - 8px) !important;
        }
      }
    }
  }

  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
}

.botttom-total-area.custom {
  @media (min-width: 1281px) {
    .v-col-lg-2 {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
}
</style>
