<script lang="ts" setup>
import { ref } from "vue";

const isDialogVisible = ref(false);
const selectedRow = ref<number | null>(null); // 선택된 행 저장

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "사원코드", key: "item01", sortable: false },
  { title: "사원명", key: "item02", sortable: false },
  { title: "부서명", key: "item03", sortable: false },
];

const tabledata = [
  {
    id: 10,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 9,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 8,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 7,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 6,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 5,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 4,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 3,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 2,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
  {
    id: 1,
    item01: "IDIDID",
    item02: "김영업",
    item03: "지부명",
  },
];

// 행 클릭 시 선택된 행 업데이트
const selectRow = (id: number) => {
  selectedRow.value = id;
};
</script>

<template>
  <VDialog v-model="isDialogVisible" width="400">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 사원명 검색</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="사원명 검색">
      <VCardText>
        <AppTextField
          append-inner-icon="tabler-search"
          placeholder="사원코드, 사원명을 선택하세요."
        />
        <VDataTable
          :headers="headers"
          :items="tabledata"
          density="compact"
          class="text-no-wrap"
          fixed-header
          style="max-height: 382px"
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
            </tr>
          </template>
        </VDataTable>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 저장</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
