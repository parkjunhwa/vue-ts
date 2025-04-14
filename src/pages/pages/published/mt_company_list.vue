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
        { title: '거래처마스터' },
      ]"
    />
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">
        거래처마스터
      </h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap"></div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            prepend-inner-icon="tabler-asterisk-simple"
            append-inner-icon="tabler-search"
            placeholder="거래처코드, 거래처명을 선택하세요."
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12">
          <AppTextField
            append-inner-icon="tabler-search"
            placeholder="영업사원코드, 영업사원명을 검색하세요."
          />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect :items="items" placeholder="유통구분분" />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect :items="items" placeholder="간납처를 선택하세요." />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect :items="items" placeholder="원외처방처를 선택하세요." />
        </VCol>
        <VCol cols="12" lg="4" md="4" sm="12" xs="12" v-show="expanded">
          <AppSelect :items="items" placeholder="출고지를 선택하세요." />
        </VCol>

        <VCol cols="12" v-show="expanded">
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
    <VCol cols="12">
      <STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            거래처 리스트
          </h5>
        </div>

        <div class="d-flex gap-2 align-center flex-wrap"></div>
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
                <th>거래처코드</th>
                <th>거래처명</th>
                <th>책임센터</th>
                <th>책임센터명</th>
                <th>영업사원코드</th>
                <th>영업사원명</th>
                <th>이메일</th>
                <th>부가세<br />등록번호</th>
                <th>항증취급<br />허가증여부</th>
                <th>전화번호</th>
                <th>매출가격그룹</th>
                <th>유통구분</th>
                <th>대표자</th>
                <th>주소</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>CASE-A</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>CASE-B</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>CASE-C</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>도매매</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>직거래병원,약국</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>-</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>-</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip size="small"> 없음 </VChip></td>
                <td>010-0000-0000</td>
                <td>-</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
              </tr>
              <tr>
                <td>IDIDID</td>
                <td>거래처명</td>
                <td>IDIDID</td>
                <td>종병1지부 1팀</td>
                <td>IDIDID</td>
                <td>홍길동</td>
                <td>E-mail</td>
                <td>IDIDID</td>
                <td><VChip color="primary" size="small"> 있음 </VChip></td>
                <td>010-0000-0000</td>
                <td>-</td>
                <td>-</td>
                <td>대표자명</td>
                <td>주소입니다.</td>
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
