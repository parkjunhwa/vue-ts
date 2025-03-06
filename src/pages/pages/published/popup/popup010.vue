<script lang="ts" setup>
import { ref } from "vue";
const isDialogVisible = ref(false);

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "순번", key: "item01", sortable: false },
  { title: "제품코드", key: "item02", sortable: false },
  { title: "제품명", key: "item03", sortable: false },
  { title: "간납처", key: "item04", sortable: false },
  { title: "원외처방처", key: "item05", sortable: false },
  { title: "반품사유", key: "item06", sortable: false },
  { title: "포장단위", key: "item07", sortable: false },
  { title: "낱알", key: "item08", sortable: false },
  { title: "반품구분", key: "item09", sortable: false },
  { title: "입력불가사유", key: "item10", sortable: false },
];

const tabledata = ref([
  {
    item01: 1,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 2,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 3,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 4,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 5,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 6,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 7,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 8,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 9,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
  {
    item01: 10,
    item02: "IDIDID",
    item03: "이가탄에프 캡슐",
    item04: "[IDIDID]간납처명",
    item05: "[IDIDID]원외처방처명",
    item06: "폐기성(유효기간임박)",
    item07: "30T",
    item08: "1",
    item09: "10",
    item10: "완제품",
    item11: "입력불가사유 출력",
  },
]);

const file = ref(null);
</script>

<template>
  <VDialog v-model="isDialogVisible" width="1400">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 반품등록 엑셀업로드 </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="반품등록 엑셀업로드">
      <VCardText>
        <VRow class="ma-0">
          <VCol cols="12" class="popup-top-between">
            <div class="popup-top-between-start">
              <VFileInput
                chips
                placeholder="첨부파일 선택"
                label="첨부파일"
                prependInnerIcon="tabler-paperclip"
                prepend-icon=""
                class="custom-input"
              />
            </div>
            <Vcol class="popup-top-between-end">
              <div class="d-flex gap-2 justify-end w-100">
                <VBtn variant="outlined" color="secondary"
                  ><VIcon start icon="tabler-refresh" />초기화</VBtn
                >
                <VBtn color="primary">엑셀저장</VBtn>
              </div>
            </Vcol>
          </VCol>
          <VCol cols="12" class="ma-0 pa-0 pt-1">
            <p class="text-body-2 mb-1 text-primary">
              ※ 입력불가 사유건은 반품등록 되지 않습니다.
            </p>
            <p class="text-body-2 mb-0">
              ※ 반품사유 : 1. 폐기성(유효기간임박), 2.납품도매변경, 3.
              처방(소진)부진, 4.파손, 5.폐업, 6.기타사유(입력가능) | 반품구분 :
              1. 완제품, 2. 낱알
            </p>
          </VCol>
        </VRow>
        <VDataTable
          :headers="headers"
          :items="tabledata"
          density="compact"
          class="text-no-wrap"
          fixed-header
          style="max-height: 450px"
          hide-default-footer
        >
          <template v-slot:item="{ item, index }">
            <tr>
              <td>{{ item.item01 }}</td>
              <td style="min-width: 100px">{{ item.item02 }}</td>
              <td>{{ item.item03 }}</td>
              <td>{{ item.item04 }}</td>
              <td>{{ item.item05 }}</td>
              <td style="min-width: 180px">
                <AppTextField
                  placeholder="반품사유"
                  density="compact"
                  v-model="tabledata[index].item06"
                />
              </td>
              <td>{{ item.item07 }}</td>
              <td>{{ item.item08 }}</td>
              <td>{{ item.item09 }}</td>
              <td>{{ item.item10 }}</td>
              <td style="background: rgba(var(--v-theme-success), 0.08)">
                {{ item.item11 }}
              </td>
            </tr>
          </template>
        </VDataTable>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.popup-top-between {
  display: flex;
  gap: 8px;
  flex-direction: row !important;
  flex-wrap: wrap;
  align-items: center;
}
.popup-top-between-start {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: flex-end !important;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  .custom-input {
    max-width: 360px;
    height: 36px;
  }
  @media (max-width: 960px) {
    flex: 0 0 100%;
    .v-input {
      max-width: 100%;
    }
  }
}
.popup-top-between-end {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 960px) {
    flex: 0 0 100%;
  }
}
</style>
