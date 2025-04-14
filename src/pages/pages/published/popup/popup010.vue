<script lang="ts" setup>
import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
import { ref } from "vue";
const isDialogVisible = ref(false);

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "순번", key: "item01", sortable: false },
  { title: "표준코드", key: "item02", sortable: false },
  { title: "대표품목코드", key: "item03", sortable: false },
  { title: "로트번호", key: "item04", sortable: false },
  { title: "유효기간", key: "item05", sortable: false },
  { title: "제품코드", key: "item06", sortable: false },
  { title: "제품명", key: "item07", sortable: false },
  { title: "포장단위", key: "item08", sortable: false },
  { title: "반품사유", key: "item09", sortable: false },
  { title: "반품구분", key: "item10", sortable: false },
  { title: "수량", key: "item11", sortable: false },
  { title: "낱알수량", key: "item12", sortable: false },
  { title: "입력불가사유", key: "item13", sortable: false },
];

const tabledata = ref([
  {
    item01: 1,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 2,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 3,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 4,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 5,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 6,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 7,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 8,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 9,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
  },
  {
    item01: 10,
    item02: "IDIDIDIDIDIDID",
    item03: "IDIDIDIDIDIDID",
    item04: "IDIDIDIDIDIDID",
    item05: "2025.06.03",
    item06: "IGT104",
    item07: "이가탄에프캡슐",
    item08: "180C",
    item09: "폐기성(유효기간임박)",
    item10: "완제품",
    item11: "10",
    item12: "-",
    item13: "입력불가사유 출력",
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
                prependInnerIcon="tabler-paperclip"
                prepend-icon=""
                class="custom-input"
                hide-details
              ></VFileInput>
            </div>
            <Vcol class="popup-top-between-end">
              <div class="d-flex gap-2 justify-end w-100">
                <VBtn variant="outlined" color="secondary"
                  ><VIcon start icon="tabler-refresh" />초기화</VBtn
                >
                <VBtn color="primary">엑셀추가</VBtn>
              </div>
            </Vcol>
          </VCol>
          <VCol cols="12" style="padding: 16px 0 8px 0">
            <BottomTotalArea>
              <VCol cols="12">
                <div
                  class="d-flex flex-column flex-md-row flex-wrap gap-2 w-100"
                >
                  <div class="top-search-return-start">
                    <div class="item">
                      <h6
                        class="d-flex text-h6 font-weight-medium align-center"
                      >
                        [IDIDID] 로그인 거래처명
                      </h6>
                    </div>
                    <div class="item">
                      <VChip color="primary" size="small">
                        <div class="chip-item">
                          <span class="item-title">간납처</span>
                        </div>
                      </VChip>
                      <span class="item-text">[IDIDID] 선택 간납처명</span>
                    </div>
                  </div>
                </div>
              </VCol>
            </BottomTotalArea>
          </VCol>
          <VCol cols="12" class="ma-0 pa-0 pt-1">
            <p class="text-body-2 mb-1 text-primary">
              ※ 입력불가사유건은 반품등록 되지 않습니다. 반품 등록시 향정제품은 엑셀업로드 제외 됩니다.
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
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item06 }}
              </td>
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item07 }}
              </td>
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item08 }}
              </td>
              <td
                style="
                  background: rgba(var(--v-theme-secondary), 0.08);
                  min-width: 180px;
                "
              >
                <AppTextField
                  placeholder="반품사유"
                  density="compact"
                  readonly
                  v-model="tabledata[index].item09"
                />
              </td>
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item10 }}
              </td>
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item11 }}
              </td>
              <td style="background: rgba(var(--v-theme-secondary), 0.08)">
                {{ item.item12 }}
              </td>
              <td style="background: rgba(var(--v-theme-success), 0.08)">
                {{ item.item13 }}
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
  padding: 0;
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

@media (max-width: 960px) {
  .top-search-return-start {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: column !important;
    align-items: normal;
  }
}

</style>
