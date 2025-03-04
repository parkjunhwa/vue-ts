<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 단가계약 미등록 품목입니다. </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="단가계약 미등록 품목입니다." class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          3% 할인율이 적용된 단가로 출하하시겠습니까?
        </p>
      </VCardText>

      <VCardText class="d-flex justify-end gap-2 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          취소
        </VBtn>
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
