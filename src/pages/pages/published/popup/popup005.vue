<script lang="ts" setup>
const isDialogVisible = ref(false);
const tatbledata = [
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
  {
    item01: "IDIDID",
    item02: "제품명(KOR)",
    item03: "IDIDID",
  },
];
</script>

<template>
  <VDialog v-model="isDialogVisible" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 제품 검색</VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="제품 검색">
      <VCardText>
        <AppTextField
          append-inner-icon="tabler-search"
          placeholder="제품코드, 제품명을 선택하세요."
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
          <thead>
            <tr>
              <th>적용코드</th>
              <th>제품명(KOR)</th>
              <th>제품유형</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tatbledata">
              <td>
                {{ item.item01 }}
              </td>
              <td>
                {{ item.item02 }}
              </td>
              <td>
                {{ item.item03 }}
              </td>
            </tr>
          </tbody>
        </VDataTable>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 저장</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
