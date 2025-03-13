<script setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
const selectedItem = ref("");
const items = ["아이템1", "아이템2"];
import { ref } from "vue";
const switchOn = ref("on");
const switchOnDisabled = ref("on");
const open = ref(["menu00"]);
const menu00 = [
  ["종병본부장", "tabler-user"],
  ["복합본부장", "tabler-user"],
  ["도매본부장", "tabler-user"],
];
const menu01 = [
  ["종병유통 1지부 1팀", "tabler-folder"],
  ["종병유통 1지부 2팀", "tabler-folder"],
];
const menu02 = [
  ["종병유통 2지부 1팀", "tabler-folder"],
  ["종병유통 2지부 2팀", "tabler-folder"],
  ["종병유통 2지부 3팀", "tabler-folder"],
  ["종병유통 2지부 4팀", "tabler-folder"],
];
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
        { title: '사용자마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        사용자마스터
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
        <VCol cols="12" lg="3" md="3" sm="12" xs="12" v-show="expanded">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="영업사원코드, 영업사원명을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="6" md="6" sm="12" xs="12" v-show="expanded">
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
            부서정보 상세
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>

      <VCard class="side-card">
        <VCardText>
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h6 class="d-flex text-h6 font-weight-medium align-center">
                부서정보
              </h6>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap"></div>
          </STitleArea>
          <VList style="max-height: 314px; min-height: calc(100vh - 235px)">
            <VListGroup value="총괄본부(사장)">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="tabler-folder"
                  title="총괄본부(사장)"
                />
              </template>

              <VListItem
                v-for="([title, icon], i) in menu00"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </VListGroup>
            <VListSubheader class="mt-4">지점선택</VListSubheader>
            <VListGroup value="종병본부장">
              <VListItem
                v-bind="props"
                prepend-icon="tabler-user"
                title="종병본부장"
                value="종병본부장"
              />
            </VListGroup>
            <VListGroup value="서울종병">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="tabler-folder"
                  title="서울종병"
                />
              </template>

              <VListGroup value="종병유통 1지부">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    prepend-icon="tabler-folder"
                    title="종병유통 1지부"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in menu01"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                />
              </VListGroup>

              <VListGroup value="종병유통 2지부">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    prepend-icon="tabler-folder"
                    title="종병유통 2지부"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in menu02"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                />
              </VListGroup>
            </VListGroup>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" lg="9" md="12" sm="12" xs="12">
      <VRow>
        <VCol cols="12">
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h5 class="d-flex text-h5 font-weight-medium align-center">
                부서원 리스트
              </h5>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small" variant="outlined" color="secondary"
                >부서원 상세수정</VBtn
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
                style="max-height: 382px"
                hide-default-footer
              >
                <thead>
                  <tr>
                    <th><VCheckbox disabled /></th>
                    <th>부서명명</th>
                    <th>사용자ID</th>
                    <th>사용자명</th>
                    <th>사번</th>
                    <th>직책</th>
                    <th>이메일</th>
                    <th>휴대폰번호</th>
                    <th>사용자상태</th>
                    <th>부서장사용여부</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch v-model="switchOnDisabled" value="on" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 60px"><VCheckbox disabled /></td>
                    <td>부서명</td>
                    <td>IDIDID</td>
                    <td>김영업</td>
                    <td>IDIDID</td>
                    <td>부장</td>
                    <td>abcd@maol.com</td>
                    <td>010-0000-0000</td>
                    <td>사용</td>
                    <td style="width: 130px">
                      <VSwitch disabled />
                    </td>
                  </tr>
                </tbody>
              </VDataTable>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <STitleArea>
            <div class="d-flex justify-start flex-wrap">
              <h5 class="d-flex text-h5 font-weight-medium align-center">
                부서원 상세정보
              </h5>
            </div>
            <div class="d-flex gap-2 align-center flex-wrap">
              <VBtn size="small">저장</VBtn>
            </div>
          </STitleArea>
          <BottomTotalArea>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppSelect
                label="유통구분"
                :items="items"
                v-model="selectedItem"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="2" md="2" sm="12" xs="12">
              <AppTextField
                label="책임센터코드"
                type="text"
                value="1900325"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="5" md="5" sm="12" xs="12">
              <AppTextField
                label="책임센터명"
                type="text"
                value="서울종병1지부"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="2" md="2" sm="12" xs="12">
              <AppTextField
                label="위치코드"
                type="text"
                value="IDIDID"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="소속부서코드|소속부서명"
                type="text"
                value="[1900200]종병1지부1팀"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppSelect
                label="직책"
                :items="items"
                v-model="selectedItem"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="사용자ID"
                type="text"
                value="IDIDID"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="사번"
                type="text"
                value="IDIDID"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="사용자명"
                type="text"
                value="김영업"
                class="required"
                readonly
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField label="사용자명(영문)" type="text" readonly />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <DemoDateTimePickerBasic2
                label="입사일"
                :config="{ dateFormat: 'Y.m.d', allowInput: true }"
                prepend-inner-icon="tabler-calendar-event"
                clearable
                readonly
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="비밀번호"
                type="password"
                value="******"
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppSelect label="검색권한" class="required" />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppSelect label="사용" />
            </VCol>
            <VCol cols="12" lg="6" md="6" sm="12" xs="12">
              <AppTextField
                label="이메일"
                type="text"
                value="asdfg@mail.co.kr"
                readonly
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="3" md="3" sm="12" xs="12">
              <AppTextField
                label="휴대폰 번호"
                type="text"
                value="010-0000-0000"
                readonly
                class="required"
              />
            </VCol>
            <VCol cols="12" lg="9" md="9" sm="12" xs="12">
              <div style="margin: -8px">
                <label
                  class="v-label mb-1 text-body-2 text-wrap"
                  style="line-height: 15px"
                  >사용여부 선택</label
                >
                <div class="d-flex align-center gap-2">
                  <VSwitch label="부서장사용" />
                  <VSwitch label="Admin 사이드 사용" />
                  <VSwitch label="관리자 승인기능 사용" />
                </div>
              </div>
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
.botttom-total-area {
  .app-picker-field {
    margin: -8px;
    width: calc(100% + 16px);
  }
}
.side-card {
  .v-card-text {
    padding: 16px;
    gap: 16px;
  }
}
</style>
