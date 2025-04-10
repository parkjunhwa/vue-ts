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
    <VIcon size="18" icon="tabler-smart-home" />
    <VBreadcrumbs
      class="px-0 pb-0 pt-0 m-0 help-center-breadcrumbs"
      :items="[
        {
          title: 'Home',
          to: { name: 'pages-home' },
        },
        { title: '반품' },
        { title: '반품등록' },
      ]"
    />
  </div>

  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">반품등록</h3>
    </div>
    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="primary">반품등록</VBtn>
    </div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12">
          <div class="d-flex flex-column flex-md-row flex-wrap gap-2 w-100">
            <div class="top-search-return-start">
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
            <div class="top-search-return-end" v-show="expanded">
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
            placeholder="간납처를 선택택하세요."
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12" v-show="expanded">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="원외처방처를 선택하세요."
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            placeholder="수거지 주소를 선택하세요."
            prepend-inner-icon="tabler-asterisk-simple"
          />
        </VCol>
        <VCol cols="12" lg="2" md="2" sm="12" xs="12" v-show="expanded"
          ><AppTextField
            placeholder="수거처 상세주소 입력"
            value="수거처 상세주소 출력"
            readonly
        /></VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppTextField placeholder="수거요청 사항을 입력하세요." />
        </VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded"
          ><VRadioGroup v-model="inlineRadio" inline>
            <VRadio label="완제품 반품" value="radio-1" />
            <VRadio label="낱알반품" value="radio-2" /> </VRadioGroup
        ></VCol>
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="제품코드, 제품명을 검색하세요."
          />
        </VCol>

        <VCol cols="12" v-show="expanded">
          <div class="d-flex gap-2 flex-wrap justify-center w-100">
            <VBtn variant="outlined" color="secondary">
              <VIcon start icon="tabler-refresh" />초기화</VBtn
            >
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol>
      <BottomTotalArea class="custom">
        <VCol cols="12" lg="6" md="6" sm="12" xs="12">
          <AppTextField
            label="제품명"
            placeholder="제품명입력"
            value="[IDIDID]제품명"
            readonly
          />
        </VCol>
        <VCol cols="12" lg="3" md="6" sm="12" xs="12">
          <VRow class="d-flex flex-row">
            <VCol cols="4">
              <AppTextField
                label="포장단위"
                placeholder="포장단위"
                value="30T"
                readonly
              />
            </VCol>
            <VCol cols="4">
              <AppTextField
                label="수량"
                placeholder="수량"
                value="30"
                disabled
                class="required"
              />
            </VCol>
            <VCol cols="4">
              <AppTextField
                label="낱알수량"
                placeholder="낱알수량"
                value="30"
              />
            </VCol>
          </VRow>
        </VCol>
        <VCol cols="12" lg="3" md="4" sm="12" xs="12">
          <VRow class="d-flex align-end">
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppSelect label="반품사유" :items="items" placeholder="선택" />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField value="반품사유 출력" readonly />
            </VCol>
          </VRow>
        </VCol>
        <div class="d-flex gap-2 align-center justify-center w-100 pa-1">
          <VBtn size="small" variant="outlined"
            ><VIcon start icon="tabler-plus" />반품추가</VBtn
          >
        </div>
      </BottomTotalArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol class="card-table-infinity">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap align-center gap-2">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            반품 정보 등록
          </h5>
          <p class="text-body-2 mb-0">
            ※ 반품사유 :  1. 폐기성(유효기간임박 또는 경과) 2. 처방부진 3.
            처방변경 4. 파손 및 변질 5. 거래정리 6. 폐업 7. 발주착오 8. 수취거절
             9. 기타(담당자 직접입력) | 반품구분 : 1. 완제품, 2. 낱알
          </p>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap">
          <VBtn size="small" variant="outlined"
            ><VIcon start icon="tabler-arrow-bar-to-down" />엑셀다운로드</VBtn
          >
          <VBtn size="small" variant="outlined"
            ><VIcon start icon="tabler-arrow-bar-to-up" />엑셀업로드</VBtn
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
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text">
                        폐기성(유효기간임박 또는 경과)</span
                      >
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 처방부진</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 처방변경</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 파손 및 변질</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 거래정리</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 폐업</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 발주착오</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text"> 수취거절</span>
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
                <div class="item num02">
                  <span class="item-cell-title"> (IGT104) 이가탄에프캡슐</span>
                </div>
              </div>
              <div class="section02">
                <div class="item num03">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">임시반품번호</span>
                      <span class="item-text"> MIDIDIDIDIDID </span>
                    </div>
                  </VChip>
                </div>
                <div class="item num04">
                  <VChip color="primary" size="small">
                    <div class="chip-item">
                      <span class="item-title">반품사유</span>
                      <span class="item-text">
                        기타(담당자 직접입력) 가나다라마바사
                        <!-- 기타일 경우에만 툴팁 -->
                        <VTooltip activator="parent" location="top">
                          기타(담당자 직접입력) 가나다라마바사
                        </VTooltip>
                      </span>
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
      items: ["Option 1", "Option 2", "Option 3"],
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>

<style lang="scss" scoped>
.top-search-return-start {
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
.top-search-return-end {
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

        &.num02 {
          flex: 1;
        }

        &.num03,
        &.num04 {
          .v-chip {
            width: 100%;
          }
        }

        &.num03 {
          width: 180px;
        }

        &.num04 {
          width: 240px;
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
          width: 100px;
        }

        &:nth-child(2) {
          width: 80px;
        }

        &:nth-child(3) {
          width: 100px;
        }

        &:nth-child(4),
        &:nth-child(5) {
          justify-content: space-between;
        }

        &:nth-child(4) {
          width: 140px;
        }

        &:nth-child(5) {
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
  min-width: 300px;
}
.section02 {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: row !important;
  justify-content: flex-end;
}

// ✅ 반응형 스타일
@media (max-width: 960px) {
  .top-search-area {
    .v-btn[variant="tonal"] {
      width: 100%;
    }
    .gap-2 {
      gap: 4px;
    }
  }
  .justify-content-start {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;
  }
  .section02 {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 4px 16px;
  }
  .top-search-return-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
  }

  .top-search-return-end {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    flex-direction: row !important;
    align-items: normal;
    justify-content: flex-start;
  }

  .card-table-infinity {
    .data {
      .justify-content-start {
        flex-direction: column !important;
        justify-content: left;
        gap: 4px;
        align-items: normal;
      }

      .justify-content-end {
        flex-direction: row !important;
        flex-wrap: wrap;
        gap: 4px 16px;

        .item {
          width: 100%;
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

:deep(.v-chip .v-chip__content),
.v-chip .chip-item,
.v-chip .item-text {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
</style>
