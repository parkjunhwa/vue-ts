<script lang="ts" setup>
import { ref } from "vue";
const isDialogVisible = ref(false);

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "순번", key: "item01", sortable: false },
  { title: "매출유형", key: "item02", sortable: false },
  { title: "거래처코드", key: "item03", sortable: false },
  { title: "거래처명", key: "item04", sortable: false },
  { title: "제품코드", key: "item05", sortable: false },
  { title: "제품명", key: "item06", sortable: false },
  { title: "간접납품처코드", key: "item07", sortable: false },
  { title: "간접납품처", key: "item08", sortable: false },
  { title: "간접납품처 지점명", key: "item09", sortable: false },
  { title: "간접납품처 영업사원명", key: "item10", sortable: false },
  { title: "단위가격(부가세제외)", key: "item11", sortable: false },
  { title: "변경금액", key: "item12", sortable: false },
];

const tabledata = ref([
  {
    item01: 1,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 2,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 3,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 4,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 5,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 6,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 7,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 8,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 9,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
  {
    item01: 10,
    item02: "매출처",
    item03: "IDIDID",
    item04: "거래처(매출처)명",
    item05: "IDIDID",
    item06: "명인아캄프로세이트정333mg",
    item07: "IDIDID",
    item08: "간접납품처명",
    item09: "책입센터  명칭 출력",
    item10: "김길동",
    item11: "45,000",
    item12: "48,000",
  },
]);

const file = ref(null);
</script>

<template>
  <VDialog v-model="isDialogVisible" width="1400">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 단가마스터 엑셀업로드 </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="단가마스터 엑셀업로드">
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
            <p class="text-body-2 mb-0 text-primary">
              ※ 변경금액으로 산출된 금액만 업로드 됩니다.
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
              <td>{{ item.item06 }}</td>
              <td style="max-width: 120px">{{ item.item07 }}</td>
              <td>{{ item.item08 }}</td>
              <td>{{ item.item09 }}</td>
              <td style="max-width: 120px">{{ item.item10 }}</td>
              <td class="text-right" style="min-width: 120px">
                {{ item.item11 }}
              </td>
              <td
                class="text-right"
                style="
                  background: rgba(var(--v-theme-success), 0.08);
                  min-width: 120px;
                "
              >
                {{ item.item12 }}
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
