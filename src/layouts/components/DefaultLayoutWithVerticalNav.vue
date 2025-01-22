<script setup>
import navItems from "@/navigation/vertical";

// Components
import Footer from "@/layouts/components/Footer.vue";
import NavBarNotifications from "@/layouts/components/NavBarNotifications.vue";
import UserProfile from "@/layouts/components/UserProfile.vue";
import NavBarLogout from "@/layouts/components/NavBarLogout.vue";

// @layouts plugin
import { VerticalNavLayout } from "@layouts";
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          id="vertical-nav-toggle-btn"
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon size="26" icon="tabler-menu-2" />
        </IconBtn>
        <VSpacer />
        <NavBarNotifications class="me-2" />
        <NavBarLogout />
      </div>
    </template>
    <!-- 👉 Pages -->
    <slot />
    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
