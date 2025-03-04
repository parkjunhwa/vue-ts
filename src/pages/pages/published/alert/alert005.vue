<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 수량을 확인하여 주세요.</VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="수량을 확인하여 주세요." class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          입력 가능 수량을 초과했습니다.<br />
          이번달에 입력 가능한 잔여 수량은 현재 {NN}개 입니다.<br />
          정정 후 발주 바랍니다.
        </p>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
