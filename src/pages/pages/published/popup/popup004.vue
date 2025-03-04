<script lang="ts" setup>
import { ref } from "vue";

const isDialogVisible = ref(false);
const selectedRow = ref<number | null>(null); // 선택된 행 저장

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "일자", key: "item01", sortable: false },
  { title: "거래처코드", key: "item02", sortable: false },
  { title: "제품명", key: "item03", sortable: false },
  { title: "사업자번호", key: "item04", sortable: false },
];

const tabledata = [
  {
    id: 1,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 2,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 3,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 4,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 5,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 6,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 7,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 8,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 9,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
  {
    id: 10,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
  },
];

// 행 클릭 시 선택된 행 업데이트
const selectRow = (id: number) => {
  selectedRow.value = id;
};
</script>

<template>
  <VDialog v-model="isDialogVisible" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 거래처 검색</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="거래처 검색">
      <VCardText>
        <AppTextField
          append-inner-icon="tabler-search"
          placeholder="거래처코드, 거래처명을 선택하세요."
        />
        <VDataTable
          :headers="headers"
          :items="tabledata"
          density="compact"
          class="text-no-wrap"
          fixed-header
          style="max-height: 450px"
          hide-default-footer
        >
          <template v-slot:item="{ item }">
            <tr
              class="cursor-pointer"
              :class="{ selected: selectedRow === item.id }"
              @click="selectRow(item.id)"
            >
              <td>{{ item.item01 }}</td>
              <td>{{ item.item02 }}</td>
              <td>{{ item.item03 }}</td>
              <td>{{ item.item04 }}</td>
            </tr>
          </template>
        </VDataTable>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 선택완료</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
