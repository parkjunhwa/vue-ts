<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 반품등록 불가</VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="반품등록 불가" class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          해당 제품은 '명인제약'에서 매입한 제품이 아닙니다.<br />
          제품을 확인 바랍니다.
        </p>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
