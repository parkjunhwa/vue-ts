<script setup>
import TopSearchArea from "@/layouts/Components/TopSearchArea.vue";
import STitleArea from "@/layouts/components/STitleArea.vue";
import TitleArea from "@/layouts/components/TitleArea.vue";
import { ref } from "vue";
const inputValue = ref("");

const onClear = () => {
  inputValue.value = "";
};
const basicEditorContent = ref(`
<p>
  텍스트 입력을 자유롭게 할 수 있습니다.
</p>
<p>
  간단한 에디터를 제공합니다.
</p>
`);

const file = ref(null);
</script>

<template>
  <div class="d-flex flex-wrap justify-start mb-2 align-center">
    <VIcon size="18" icon="tabler-arrow-left" />
    <router-link to="-1" class="text-secondary">이전</router-link>
  </div>
  <TitleArea>
    <div class="d-flex justify-start flex-wrap">
      <h3 class="d-flex text-h3 font-weight-medium align-center">공지사항</h3>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn size="large" color="primary">저장</VBtn>
    </div>
  </TitleArea>
  <VRow>
    <VCol cols="12">
      <TopSearchArea v-model:expanded="expanded" :openbutton="true">
        <VCol cols="12" lg="5" md="5" sm="12" xs="12">
          <AppTextField
            label="제목"
            placeholder="제목입력"
            value="제목이 이렇게 들어갑니다."
            class="required"
            variant="outlined"
          />
        </VCol>
        <VCol cols="6" lg="1" md="1" sm="6" xs="6" v-show="expanded">
          <AppTextField
            label="작성자"
            placeholder="작성자"
            value="김영업"
            class="required"
          />
        </VCol>
        <VCol cols="6" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            label="작성일"
            placeholder="작성일"
            value="2024.12.12"
            readonly
          />
        </VCol>
        <VCol cols="6" lg="2" md="2" sm="6" xs="6" v-show="expanded">
          <AppTextField
            label="조회수"
            placeholder="조회수"
            value="201232"
            readonly
          />
        </VCol>
        <VCol cols="6" lg="2" md="6" sm="6" xs="6" v-show="expanded">
          <AppTextField label="번호" placeholder="번호" value="30" readonly />
        </VCol>
        <VCol cols="12" lg="3" md="6" sm="12" xs="12" v-show="expanded">
          <AppSelect
            :items="items"
            label="게시판 카테고리 선택"
            class="required"
            placeholder="게시판 카테고리를 선택하세요."
          />
        </VCol>
        <VCol
          cols="12"
          lg="3"
          md="6"
          sm="12"
          xs="12"
          class="datetimerange"
          v-show="expanded"
        >
          <DemoDateTimePickerRange
            label="게시기간"
            class="required"
            :config="{
              mode: 'range',
              enableTime: true,
              dateFormat: 'Y.m.d H시i분',
            }"
            model-value="2024.12.12 09시00분 ~ 2024.12.12 09시00분"
          />
        </VCol>
        <VCol
          cols="12"
          lg="3"
          md="6"
          sm="12"
          xs="12"
          class="chekarea"
          v-show="expanded"
        >
          <label
            class="v-label mb-1 text-body-2 text-wrap"
            style="line-height: 15px"
            >메인 페이지 및 상단고정</label
          >

          <div class="d-flex align-center">
            <VCheckbox label="메인 페이지" value="checkbox-1" />
            <VCheckbox label="게시판 상단고정" value="checkbox-2" />
          </div>
        </VCol>
        <VCol
          cols="12"
          lg="3"
          md="3"
          sm="12"
          xs="12"
          class="endtime"
          v-show="expanded"
        >
          <DemoDateTimePickerBasic2
            readonly
            label="상단 고정 종료일"
            class="required"
            :config="{
              enableTime: true,
              dateFormat: 'Y-m-d H시 i분',
            }"
            model-value="2024.12.12 09시 00분"
          />
        </VCol>
        <VCol cols="12" lg="12" md="12" sm="12" xs="12" v-show="expanded">
          <label
            class="v-label mb-1 text-body-2 text-wrap"
            style="line-height: 15px"
            >첨부파일</label
          >
          <VFileInput
            chips
            placeholder="첨부파일 선택"
            prependInnerIcon="tabler-paperclip"
            prepend-icon=""
            multiple
            class="custom-input"
            hide-details
          ></VFileInput>
          <div class="v-messages mt-1">
            (이미지/문서 파일 최대 3개, 파일 1개 용량 10MB 제한)
          </div>
        </VCol>
      </TopSearchArea>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12"
      ><STitleArea>
        <div class="d-flex justify-start flex-wrap">
          <h5 class="d-flex text-h5 font-weight-medium align-center">
            공지 입력 내용
          </h5>
        </div>
        <div class="d-flex gap-2 align-center flex-wrap"></div>
      </STitleArea>
      <VCard class="basic-editor-card">
        <VCardText
          ><TiptapEditor
            v-model="basicEditorContent"
            class="border rounded basic-editor"
        /></VCardText>
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
      nameRules: [(v) => !!v || "필수 항목입니다"],
    };
  },
};
</script>

<style lang="scss" scoped>
.datetimerange {
  flex: 1;
  max-width: none;
  @media (max-width: 960px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.chekarea {
  flex: 0 0 280px;
  max-width: 25%;

  @media (max-width: 960px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.endtime {
  flex: 0 0 260px;
  max-width: 25%;

  @media (max-width: 960px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
