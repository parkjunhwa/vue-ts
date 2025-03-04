<script lang="ts" setup>
import { ref } from "vue";

const isDialogVisible = ref(false);
const selectedRow = ref<number | null>(null); // 선택된 행 저장

// 정렬 기능 비활성화 (sortable: false)
const headers = [
  { title: "일자", key: "item01", sortable: false },
  { title: "코드", key: "item02", sortable: false },
  { title: "제품명", key: "item03", sortable: false },
  { title: "LOT NUMBER", key: "item04", sortable: false },
  { title: "대표품목코드", key: "item05", sortable: false },
  { title: "유효기간", key: "item06", sortable: false },
  { title: "포장단위", key: "item07", sortable: false },
  { title: "수량", key: "item08", sortable: false },
  { title: "단가", key: "item09", sortable: false },
];

const tabledata = [
  {
    id: 1,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 2,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 3,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 4,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 5,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 6,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 7,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 8,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 9,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
  {
    id: 10,
    item01: "2024.05.24",
    item02: "IDIDID",
    item03: "제품명",
    item04: "IDIDID",
    item05: "IDIDIDID",
    item06: "2024.05.24",
    item07: "30T",
    item08: "1",
    item09: "12,345",
  },
];

// 행 클릭 시 선택된 행 업데이트
const selectRow = (id: number) => {
  selectedRow.value = id;
};
</script>

<template>
  <VDialog v-model="isDialogVisible" width="1000">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 제품 선택</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="제품 선택">
      <VCardText>
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
              <td>{{ item.item05 }}</td>
              <td>{{ item.item06 }}</td>
              <td>{{ item.item07 }}</td>
              <td>{{ item.item08 }}</td>
              <td class="text-right">{{ item.item09 }}</td>
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
