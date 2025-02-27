<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import { ref } from "vue";
const inputValue = ref("");
const inputC = ref("이상없음");
const inputD = ref("회전초과");
const inputE = ref("여신초과");

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
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="배송지 주소를 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="text"
            placeholder="Placeholder Text"
            value="배송지 상세주소 출력"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="inputValue"
            placeholder="배송요청 사항을 입력하세요."
            clearable
            @keydown.esc="onClear"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppTextField
            v-model="inputC"
            prefix="OTC회전여부"
            type="text"
            readonly
            class="otcfield text-right"
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
            v-model="inputD"
            prefix="ETC회전여부"
            type="text"
            readonly
            class="etcfield text-right error--text"
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            v-model="inputE"
            prefix="여신여부"
            type="text"
            readonly
            class="creditfield text-right error--text"
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <VBtn variant="tonal"
            ><VIcon start icon="tabler-refresh" />거래내역 조회
          </VBtn>
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
  </VRow>
  <VRow>
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
      <VCard class="data">
        <VCardText>
          <div class="d-flex flex-column flex-md-row gap-2 w-100">
            <!-- 왼쪽 컨텐츠 -->
            <div
              class="d-flex flex-row flex-grow-1 gap-2 justify-content-start"
            >
              <div class="section01">
                <div class="item num01">
                  <VCheckbox />
                </div>
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 폐기성(유효기간임박)</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">포장단위</span>
                <span class="item-text">30T</span>
              </div>
              <div class="item">
                <span class="item-title">수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">낱알수량</span>
                <span class="item-text">30</span>
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
                <div class="item num01">
                  <VCheckbox />
                </div>
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 폐기성(유효기간임박)</span>
                    </div>
                  </VChip>
                </div>
              </div>
            </div>
            <!-- 오른쪽 컨텐츠 -->
            <div class="d-flex flex-row justify-content-end">
              <div class="item">
                <span class="item-title">포장단위</span>
                <span class="item-text">30T</span>
              </div>
              <div class="item">
                <span class="item-title">수량</span>
                <span class="item-text">30</span>
              </div>
              <div class="item">
                <span class="item-title">낱알수량</span>
                <span class="item-text">30</span>
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
  <VRow>
    <VCol cols="12" lg="8" md="8" sm="12" xs="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            회전초과금액
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <BottomTotalArea>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="ETC"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="OTC"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            label="합계금액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
      </BottomTotalArea>
    </VCol>
    <VCol cols="12" lg="4" md="4" sm="12" xs="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            수금예정금액
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <BottomTotalArea>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="필요금액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="수금예정금액"
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
  <VRow>
    <VCol cols="12" lg="8" md="8" sm="12" xs="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            여신초과금액
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <BottomTotalArea class="custom">
        <VCol cols="12" lg="2" md="4" sm="12" xs="12">
          <AppTextField
            label="총잔고"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="2" md="4" sm="12" xs="12">
          <AppTextField
            label="미도래"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="2" md="4" sm="12" xs="12">
          <AppTextField
            label="총대차"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="2" md="6" sm="12" xs="12">
          <AppTextField
            label="담보금액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="2" md="6" sm="12" xs="12">
          <AppTextField
            label="발주금액"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
      </BottomTotalArea>
    </VCol>
    <VCol cols="12" lg="4" md="4" sm="12" xs="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            수금예정금액
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <BottomTotalArea>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="여신"
            placeholder="금액입력"
            value="2,000,000"
            readonly
            suffix="원"
            class="form-align-right"
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="수금예정금액"
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
.otcfield.error--text :deep(.v-field__input),
.etcfield.error--text :deep(.v-field__input),
.creditfield.error--text :deep(.v-field__input) {
  color: var(--error-main);
}
// ✅ 하단 영역 스타일
.botttom-total-area {
  padding: 24px;

  .v-col-12 {
    .flex-grow-1 {
      margin: -8px;
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
