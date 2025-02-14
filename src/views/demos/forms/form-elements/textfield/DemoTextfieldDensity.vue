<script lang="ts" setup>
import { ref } from "vue";

const inputValue = ref("");

const onClear = () => {
  inputValue.value = "";
};
</script>
<template>
  <AppTextField
    v-model="inputValue"
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
    clearable
    @keydown.esc="onClear"
  />
</template>
