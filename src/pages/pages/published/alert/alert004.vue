<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 여신금액을 확인해 주세요. </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="여신금액을 확인해 주세요." class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          여신금액이 초과되었습니다.<br />
          여신금액을 확인하시고 주문을 신청해 주세요.
        </p>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
