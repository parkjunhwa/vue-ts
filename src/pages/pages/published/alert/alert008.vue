<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 엑셀파일 내용에 입력불가 사유</VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard
      title="작성하신 엑셀파일 내용에
        입력불가 사유가 있습니다."
      class="text-center"
    >
      <VCardText>
        <p class="text-center mb-0">
          "엑셀다운받기" 버튼을 클릭하여 파일 다운 후 재수정 엑셀파일을 업로드
          하세요.
        </p>
        <div class="justify-content-center">
          <VChip> 엑셀 파일.xlsx </VChip>
        </div>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
