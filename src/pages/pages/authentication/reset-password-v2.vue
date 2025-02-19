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
  newPassword: "",
  confirmPassword: "",
});

const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
// 입력 값 초기화 함수
const onClear1 = () => {
  form.value.newPassword = "";
};
const onClear2 = () => {
  form.value.confirmPassword = "";
};
</script>

<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-5 background-image"
  >
    <div class="position-relative my-sm-16">
      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card"
        max-width="460"
        :class="$vuetify.display.smAndUp ? 'pa-6' : 'pa-2'"
      >
        <VCardItem class="justify-center">
          <VCardTitle>
            <RouterLink to="/">
              <div class="app-logo mb-4">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
                <h1 class="app-logo-title">
                  {{ themeConfig.app.title }}
                </h1>
              </div>
            </RouterLink>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <h4 class="text-h4 mb-1">비밀번호 초기화 🔒</h4>
          <p class="mb-0">새로운 비밀번호를 입력하세요.</p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.newPassword"
                  autofocus
                  label="새로운 비밀번호"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  prepend-inner-icon="tabler-lock"
                  clearable
                  @keydown.esc="onClear1"
                />
              </VCol>

              <!-- Confirm Password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.confirmPassword"
                  label="비밀번호 확인"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="
                    isConfirmPasswordVisible = !isConfirmPasswordVisible
                  "
                  prepend-inner-icon="tabler-lock"
                  clearable
                  @keydown.esc="onClear2"
                />
              </VCol>

              <!-- reset password -->
              <VCol cols="12">
                <VBtn block type="submit"> 비밀번호 변경 </VBtn>
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
                  <span>로그인 화면으로 돌아가기</span>
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
.text-h2 {
  font-weight: 700;
}
.text-h5 {
  font-weight: 700;
}
.app-logo-desk {
  display: flex;
  height: 64px;
  width: fit-content;
  gap: 12px;
  .app-logo-title {
    font-size: 44px;
  }
  img {
    height: 64px;
  }
  .v-responsive__content {
    flex: none;
  }
}
@media (max-width: 1280px) {
  .v-card-text {
    background: none;
    padding: 0 !important;
  }
  .v-card--variant-elevated {
    background: none;
    box-shadow: none;
  }
  .v-field__overlay {
    background: #fff !important;
  }
  .app-logo {
    height: 40px;
    gap: 8px;
    .app-logo-title {
      font-size: 28px;
    }
    img {
      height: 40px;
    }
  }
  .footer {
    position: fixed;
    bottom: 20px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (min-width: 961px) {
  .position-relative {
    max-width: 900px;
  }
  .footer {
    margin-top: 24px;
  }
}
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
