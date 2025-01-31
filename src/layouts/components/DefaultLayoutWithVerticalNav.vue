<script setup>
import navItems from "@/navigation/vertical";

// Components
import Footer from "@/layouts/components/Footer.vue";
import NavBarLogout from "@/layouts/components/NavBarLogout.vue";
import NavBarNotifications from "@/layouts/components/NavBarNotifications.vue";
import { VerticalNavLayout } from "@layouts";

import { layoutConfig } from "@layouts";
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          id="vertical-nav-toggle-btn"
          class="ms-n3 me-2 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon size="26" icon="tabler-menu-2" />
        </IconBtn>

        <RouterLink to="/" class="app-logo app-title-wrapper d-lg-none">
          <div class="icon">
            <img src="@images/logos/logo.png" alt="logo" />
          </div>
          <Transition name="vertical-nav-app-title">
            <h1 v-show="!hideTitleAndIcon" class="app-logo-title">
              {{ layoutConfig.app.title }}
            </h1>
          </Transition>
        </RouterLink>

        <VSpacer />

        <div class="align-center me-2 d-none d-lg-flex">
          <span
            class="text-body-1 font-weight-regular"
            style="color: var(--theme-text-primary)"
            >홍길동</span
          >
        </div>
        <NavBarNotifications class="d-none d-lg-flex" />
        <NavBarLogout class="d-none d-lg-flex" />
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

<style lang="scss" scoped>
.app-logo-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.25px;
  text-transform: capitalize;
}
.icon {
  width: 22px;
  height: 22px;
  img {
    width: 16px;
    height: 22px;
  }
}
</style>
