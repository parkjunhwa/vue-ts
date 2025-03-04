<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 한도/여신 초과 </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="한도/여신 초과" class="text-center">
      <VCardText>
        <p class="text-center m-0">
          해당 거래처는 관리처로 등록되어 있습니다.<br />
          주문을 진행하시겠습니까?
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
