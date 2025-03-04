<script lang="ts" setup>
const isDialogVisible = ref(false);

import BottomTotalArea from "@/layouts/components/BottomTotalArea.vue";
const currentTab = ref("window1");
const tatbledata = [
  {
    item01: "2024.12",
    item02: "550,000",
  },
  {
    item01: "2024.11",
    item02: "550,000",
  },
  {
    item01: "2024.10",
    item02: "550,000",
  },
  {
    item01: "2024.09",
    item02: "550,000",
  },
  {
    item01: "2024.08",
    item02: "550,000",
  },
];
</script>

<template>
  <VDialog v-model="isDialogVisible" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 거래처 회전 내역 - 직거래 약국일 때 </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="거래처 회전 내역">
      <VCardText>
        <h6 class="d-flex text-h6 font-weight-bold align-center">
          [ IDIDID] 선택 거래처명-직거래 약국일 때
        </h6>
        <VTabs v-model="currentTab" class="v-tabs-pill m-0">
          <VTab>전체</VTab>
          <VTab>ETC</VTab>
          <VTab>OTC</VTab>
        </VTabs>
        <BottomTotalArea>
          <VRow>
            <VCol cols="6">
              <AppTextField
                label="잔고"
                placeholder="금액입력"
                value="2,000,000"
                readonly
                suffix="원"
                class="form-align-right"
              />
            </VCol>
            <VCol cols="6">
              <AppTextField
                label="회전여부"
                value="회전초과"
                readonly
                class="form-align-right error--text"
              />
            </VCol>
          </VRow>
        </BottomTotalArea>
        <VWindow v-model="currentTab" style="overflow: visible">
          <VWindowItem v-for="item in 3" :key="`window${item}`">
            <VTable
              fixed-header
              density="compact"
              class="text-no-wrap"
              style="max-height: 450px"
            >
              <thead>
                <tr>
                  <th>매출년월월</th>
                  <th>회전금액</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in tatbledata">
                  <td>
                    {{ item.item01 }}
                  </td>
                  <td class="text-right">
                    {{ item.item02 }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VWindowItem>
        </VWindow>
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.botttom-total-area {
  padding: 36px;

  .v-col-6 {
    .flex-grow-1 {
      margin: -8px;
    }
  }
}
</style>
