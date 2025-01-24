<script lang="ts" setup>
const isDialogVisible = ref(false);
</script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props"> Open Dialog </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="white">
          <VBtn icon variant="plain" @click="isDialogVisible = false">
            <VIcon color="#000000" icon="tabler-x" />
          </VBtn>

          <VToolbarTitle>전체팝업</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn variant="text" @click="isDialogVisible = false"> 저장 </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>
      <div class="fullpopup-page-content">내용입력 예정</div>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
