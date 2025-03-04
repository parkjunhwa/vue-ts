<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 향정신성의약품 엑셀반품등록불가</VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title='"향정신성의약품"엑셀반품등록불가' class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          향정신성의약 제품은 엑셀등록이 안됩니다.<br />
          제품검색 후 등록하세요.
        </p>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
