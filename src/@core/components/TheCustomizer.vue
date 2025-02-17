<script setup lang="tsx">
import {
  staticPrimaryColor,
  staticPrimaryDarkenColor,
} from "@/plugins/vuetify/theme";
import { useTheme } from "vuetify";

const vuetifyTheme = useTheme();

// Set default primary color and darken color
vuetifyTheme.themes.value[vuetifyTheme.name.value].colors.primary =
  staticPrimaryColor;
vuetifyTheme.themes.value[vuetifyTheme.name.value].colors["primary-darken-1"] =
  staticPrimaryDarkenColor;
</script>

<template>
  <div class="d-lg-block d-none">
    <p class="text-h6">Default Theme Applied</p>
  </div>
</template>

<style lang="scss">
.app-customizer {
  display: none;
}
</style>
