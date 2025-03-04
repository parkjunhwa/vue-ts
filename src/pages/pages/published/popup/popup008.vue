<script lang="ts" setup>
const isDialogVisible = ref(false);

const currentTab = ref("window1");
</script>

<template>
  <VDialog v-model="isDialogVisible" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> 전자서명 </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="전자서명(서명확인:서명자 확인일 때)">
      <VCardText>
        <AppTextField
          label="서명이름"
          placeholder="등록자를 입력하세요."
          value="김대표"
          readonly
        />
        <div class="sign-area readonly">
          <label
            class="v-label mb-1 text-body-2 text-wrap"
            style="line-height: 15px"
            >서명이름</label
          >
          <div class="sign-area-input"></div>
        </div>
        <AppTextField
          label="비고"
          placeholder="비고사항을 입력하세요."
          value="예) 잔액 1,000,000 확인하였음"
          readonly
        />
      </VCardText>
      <VCardText class="d-flex justify-end gap-2 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          <VIcon start icon="tabler-refresh" />다시작성
        </VBtn>
        <VBtn @click="isDialogVisible = false"> 저장</VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
