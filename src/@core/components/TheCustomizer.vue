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
