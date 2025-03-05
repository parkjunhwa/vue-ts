<script lang="ts" setup>
import { ref } from "vue";
const isDialogVisible = ref(false);

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "순번", key: "item01", sortable: false },
  { title: "제품코드", key: "item02", sortable: false },
  { title: "제품명", key: "item03", sortable: false },
  { title: "규격", key: "item04", sortable: false },
  { title: "수량", key: "item05", sortable: false },
  { title: "입력불가사유", key: "item06", sortable: false },
];

const tabledata = ref([
  {
    item01: 1,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
  {
    item01: 2,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
  {
    item01: 3,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
  {
    item01: 4,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
  {
    item01: 5,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
  {
    item01: 6,
    item02: "IDIDID",
    item03: "제품명",
    item04: "30T",
    item05: "30",
    item06: "입력불가사유",
  },
]);

const file = ref(null);
</script>

<template>
  <VDialog v-model="isDialogVisible" width="900">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 주문등록 엑셀업로드 </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="주문등록 엑셀업로드">
      <VCardText>
        <VRow class="d-flex gap-2 justify-center popup-top-between">
          <VCol cols="9">
            <VFileInput
              chips
              placeholder="첨부파일 선택"
              label="첨부파일"
              prependInnerIcon="tabler-paperclip"
              prepend-icon=""
              class="custom-input"
            />
          </VCol>
          <VCol cols="3">
            <div class="d-flex gap-2 flex-wrap justify-center w-100">
              <VBtn variant="outlined" color="secondary"
                ><VIcon start icon="tabler-refresh" />초기화</VBtn
              >
              <VBtn color="primary">엑셀저장</VBtn>
            </div>
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
              <td style="min-width: 120px">{{ item.item02 }}</td>
              <td>{{ item.item03 }}</td>
              <td>{{ item.item04 }}</td>
              <td style="width: 100px">
                <AppTextField
                  placeholder="수량"
                  density="compact"
                  v-model="tabledata[index].item05"
                />
              </td>
              <td>{{ item.item06 }}</td>
            </tr>
          </template>
        </VDataTable>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.popup-top-between {
  padding: 0px;
  margin: 0;
  .v-col-12 {
    .flex-grow-1 {
      margin: -8px;
    }
  }
}
</style>
