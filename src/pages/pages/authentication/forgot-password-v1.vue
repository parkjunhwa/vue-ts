<script setup lang="ts">
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";

definePage({
  meta: {
    layout: "blank",
    public: true,
  },
});

const form = ref({
  email: "",
});
// 입력 값 초기화 함수
const onClear1 = () => {
  form.value.email = "";
};
</script>

<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-5 background-image"
  >
    <div class="position-relative my-sm-16">
      <!-- 👉 Auth card -->
      <VCard
        class="auth-card"
        max-width="460"
        :class="$vuetify.display.smAndUp ? 'pa-6' : 'pa-0'"
      >
        <VCardItem class="justify-center">
          <VCardTitle>
            <RouterLink to="/">
              <div class="app-logo mb-4">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
                <h1 class="app-logo-title ml-1">
                  {{ themeConfig.app.title }}
                </h1>
              </div>
            </RouterLink>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <h4 class="text-h4 mb-1">비밀번호 분실 🔒</h4>
          <p class="mb-0">
            이메일 주소를 입력하시면 초기화된 비밀번호를<br />발송해 드립니다.
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="Email"
                  type="email"
                  placeholder="user@email.com"
                  prepend-inner-icon="tabler-mail"
                  clearable
                  @keydown.esc="onClear1"
                />
              </VCol>

              <!-- reset password -->
              <VCol cols="12">
                <VBtn block type="submit"> 초기화 비밀번호 전송 </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <RouterLink
                  class="d-flex align-center justify-center text-body-2"
                  :to="{ name: 'pages-authentication-login-v1' }"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    size="20"
                    class="me-1 flip-in-rtl"
                  />
                  <span>로그인 화면으로 이동</span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
.background-image {
  background-image: url("@/assets/images/front-pages/backgrounds/login_bg_v1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
.bg-primary {
  background: linear-gradient(
    270deg,
    rgba(230, 0, 18, 0.7) 0%,
    rgb(230, 0, 18) 100%
  ) !important;
}
.text-primary {
  color: rgb(230, 0, 18) !important;
}
.app-text-field
  .v-label:has(
    + .v-input .v-field.v-field--focused .v-field__outline.text-primary
  ) {
  color: rgb(230, 0, 18) !important;
}
</style>
