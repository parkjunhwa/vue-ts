<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
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
    <VIcon size="18" icon="tabler-arrow-left" />
    <router-link to="-1" class="text-secondary">이전</router-link>
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        주문내역조회
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>

  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="false">
        <VCol cols="12" class="top-search-order">
          <div class="d-flex flex-row flex-md-row gap-2 w-100">
            <div class="top-search-order-start">
              <div class="item">
                <h6 class="d-flex text-h6 font-weight-medium align-center">
                  [IDIDID] 선택 거래처명
                </h6>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">사업자번호</span>
                  </div>
                </VChip>
                <span class="item-text">1234567890</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">대표자</span>
                  </div>
                </VChip>
                <span class="item-text">홍길동</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">간납처</span>
                  </div>
                </VChip>
                <span class="item-text">[IDIDID] 선택 간납처명</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="chip-item">
                    <span class="item-title">처방처</span>
                  </div>
                </VChip>
                <span class="item-text">[IDIDID] 선택 처방처명</span>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="top-chip-item">
                    <span class="item-title">임시반품번호</span>
                    <span class="item-text"> MIDIDIDIDIDID </span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="top-chip-item">
                    <span class="item-title">주문번호</span>
                    <span class="item-text"> IDIDIDIDIDIDIDIDIDID </span>
                  </div>
                </VChip>
              </div>
              <div class="item">
                <VChip color="primary" size="small">
                  <div class="top-chip-item">
                    <span class="item-title">유형</span>
                    <span class="item-text"> ETC </span>
                  </div>
                </VChip>
              </div>
            </div>
            <div class="top-search-order-end">
              <div class="item">
                <span class="item-title">주문등록일</span>
                <span class="item-text">2024.12.12</span>
              </div>
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
        <VCol cols="12" lg="3" md="4" sm="12" xs="12"
          ><AppTextField
            placeholder="수거지 주소"
            value="[IDIDID]수거지 명칭"
            readonly
        /></VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12"
          ><AppTextField
            placeholder="수거지 상세주소"
            value="[IDIDID]수거지 명칭"
            readonly
        /></VCol>
        <VCol cols="12" lg="5" md="4" sm="12" xs="12"
          ><AppTextField
            placeholder="수거요청사항항"
            value="수거요청사항 내용이 출력됩니다."
            readonly
        /></VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            반품 정보 목록
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <span class="item-cell-title text-primary">
                  (IGT104) 이가탄에프캡슐</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">발주수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">정정수량</span>
                <span class="item-text font-weight-bold">30</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액(VAT제외)</span>
                <span class="item-text">80,000</span>
              </div>
            </div>
          </div>
        </VCardText>
      </VCard>
      <VCard class="data del">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <span class="item-cell-title text-primary">
                  (IGT104) 이가탄에프캡슐</span
                ><VChip color="error" size="x-small"> 수량 없음 삭제 </VChip>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">발주수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">정정수량</span>
                <span class="item-text font-weight-bold">30</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액(VAT제외)</span>
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
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <span class="item-cell-title text-primary">
                  (IGT104) 이가탄에프캡슐</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">발주수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">정정수량</span>
                <span class="item-text font-weight-bold">30</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액(VAT제외)</span>
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
            <div class="d-flex flex-row flex-grow-1 justify-content-start">
              <div class="item">
                <span class="item-cell-title text-primary">
                  (IGT104) 이가탄에프캡슐</span
                >
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">발주수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">정정수량</span>
                <span class="item-text font-weight-bold">30</span>
              </div>
              <div class="item">
                <span class="item-title">공급가액(VAT제외)</span>
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
            label="반품금액합계(VAT제외)"
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
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>

<style lang="scss" scoped>
.top-search-area:has(.top-search-area-open-button-wrap) {
  padding: 24px;
}
:deep(.top-search-area-open-button-wrap) {
  display: none;
}

.top-search-order-start {
  display: flex;
  gap: 8px 16px;
  flex-wrap: wrap;
  flex-direction: row !important;
  align-items: center;
  flex: 1;
  .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
.top-search-order-end {
  display: flex;
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
.card-table-infinity .data {
  gap: 4px 16px;
  .gap-2 {
    gap: 4px 16px;
  }
}
.card-table-infinity .data .justify-content-start {
  gap: 8px 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.card-table-infinity .data .justify-content-start .item:nth-child(1) {
  color: #333;
}

.card-table-infinity .data .justify-content-end {
  gap: 4px 16px;
  align-items: center;
}
.card-table-infinity .data .justify-content-end .item {
  width: 86px;
  align-items: center;
}
.card-table-infinity .data .justify-content-end .item:nth-child(1) {
  width: 100px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(2) {
  width: 100px;
}
.card-table-infinity .data .justify-content-end .item:nth-child(3) {
  width: 180px;
  justify-content: space-between;
}
@media (max-width: 1280px) {
  .top-search-order {
    .d-flex {
      flex-direction: column !important;
    }
  }
  .top-search-order-start {
    display: flex;
    flex-wrap: wrap;
    .item:first-child {
      display: block;
      min-width: 100%;
      h6 {
        align-items: normal !important;
      }
    }
  }
  .top-search-order-end {
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    justify-content: left;
  }
}
@media (max-width: 960px) {
  .top-search-order-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    flex-direction: row !important;
    align-items: normal;
    justify-content: left;
  }
  .top-search-order-end {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    flex-direction: row !important;
    align-items: normal;
    justify-content: left;
  }

  .card-table-infinity .data .justify-content-start {
    flex-direction: column !important;
    justify-content: left;
    gap: 4px;
    align-items: normal;
  }
  .card-table-infinity .data .justify-content-end {
    flex-direction: row !important;
    flex-wrap: wrap;
    gap: 4px 16px;
  }
  .card-table-infinity .data .justify-content-end .item {
    width: 100%;
  }
  .v-card.data {
    .gap-2 {
      gap: 4px;
    }
  }
}
.card-table-infinity .data.del {
  background: var(--color-secondary-gray-100);
  .justify-content-end {
    .item-title,
    .item-text {
      color: var(--error-main) !important;
    }
  }
}
</style>
