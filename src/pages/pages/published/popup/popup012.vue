<script lang="ts" setup>
import { ref } from "vue";

const isDialogVisible = ref(false);
const selectedRow = ref<number | null>(null); // 선택된 행 저장

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "월", key: "item01", sortable: false },
  { title: "잔고확인", key: "item02", sortable: false },
];

const tabledata = [
  {
    id: 12,
    item01: 2024.12,
    item02: "Y",
  },
  {
    id: 11,
    item01: 2024.11,
    item02: "Y",
  },
  {
    id: 10,
    item01: 2024.1,
    item02: "Y",
  },
  {
    id: 9,
    item01: 2024.09,
    item02: "Y",
  },
  {
    id: 8,
    item01: 2024.08,
    item02: "Y",
  },
  {
    id: 7,
    item01: 2024.07,
    item02: "N",
  },
  {
    id: 6,
    item01: 2024.06,
    item02: "Y",
  },
  {
    id: 5,
    item01: 2024.05,
    item02: "Y",
  },
  {
    id: 4,
    item01: 2024.04,
    item02: "Y",
  },
  {
    id: 3,
    item01: 2024.03,
    item02: "Y",
  },
  {
    id: 2,
    item01: 2024.02,
    item02: "N",
  },
  {
    id: 1,
    item01: 2024.01,
    item02: "Y",
  },
];

// 행 클릭 시 선택된 행 업데이트
const selectRow = (id: number) => {
  selectedRow.value = id;
};
</script>

<template>
  <VDialog v-model="isDialogVisible" width="300">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 잔고 확인 여부</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="잔고 확인 여부">
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
          <template v-slot:item="{ item }">
            <tr
              class="cursor-pointer"
              :class="{ selected: selectedRow === item.id }"
              @click="selectRow(item.id)"
            >
              <td>{{ item.item01 }}</td>
              <td class="text-center">{{ item.item02 }}</td>
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
