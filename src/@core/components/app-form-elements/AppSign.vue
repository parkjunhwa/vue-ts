<script lang="ts" setup>
defineOptions({
  name: "AppSign",
  inheritAttrs: false,
});
</script>

<template>
  <div class="app-text-field flex-grow-1">
    <VLabel
      v-if="label"
      :for="elementId"
      class="mb-1 text-body-2 text-wrap"
      style="line-height: 15px"
      :text="label"
    />
    <div class="sign-area"></div>
  </div>
</template>
