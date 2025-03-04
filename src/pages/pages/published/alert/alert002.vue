<script lang="ts" setup>
const isDialogVisible = ref(false);
import Alertimg from "@images/image001.png";
</script>

<template>
  <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 금일 주문 마감 </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="금일 주문 마감" class="text-center">
      <VCardText>
        <p class="text-center mb-0">
          금일 주문입력은 마감되었습니다.<br />
          내일 다시 진행해주시길 바랍니다.
        </p>
        <div class="d-flex justify-center align-center">
          <v-img :src="Alertimg" alt="주문마감 이미지" max-width="153"></v-img>
        </div>
      </VCardText>

      <VCardText class="d-flex flex-wrap">
        <VBtn @click="isDialogVisible = false"> 확인</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
