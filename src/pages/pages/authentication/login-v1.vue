<script setup lang="ts">
import logoIcon from "@images/logos/logo.png";
import { themeConfig } from "@themeConfig";
definePage({
  meta: {
    layout: "blank",
    public: true,
  },
});

const form = ref({
  companycode: "",
  userid: "",
  password: "",
  remember: false,
});

const isPasswordVisible = ref(false);

// 입력 값 초기화 함수
const onClear1 = () => {
  form.value.companycode = "";
};
const onClear2 = () => {
  form.value.userid = "";
};
const onClear3 = () => {
  form.value.password = "";
};
</script>

<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-5 background-image"
  >
    <div class="position-relative">
      <VRow>
        <VCol cols="12" sm="12" lg="6" class="d-none d-lg-block">
          <VCardText>
            <RouterLink to="/">
              <div class="app-logo-desk mb-10">
                <v-img>
                  <img :src="logoIcon" alt="Logo" />
                </v-img>
                <h1 class="app-logo-title">
                  {{ themeConfig.app.title }}
                </h1>
              </div>
            </RouterLink>
            <h2 class="text-h2 mb-5">
              Better Quality medicine<br />Better Public<br />Health
            </h2>
            <p class="mb-0">‘좋은 치료제, 넘치는 건강’ 명인제약 입니다.</p>
          </VCardText>
        </VCol>
        <VCol cols="12" sm="12" lg="6">
          <VCard class="auth-card">
            <VCardText class="pa-12">
              <VCol cols="12" class="pa-0 text-center d-block d-lg-none">
                <RouterLink to="/" class="d-inline-block pb-6">
                  <div class="app-logo align-center">
                    <v-img>
                      <img :src="logoIcon" alt="Logo" />
                    </v-img>
                    <h1 class="app-logo-title">
                      {{ themeConfig.app.title }}
                    </h1>
                  </div>
                </RouterLink>
                <h5 class="text-h5 mb-1">
                  Better Quality medicine<br />
                  Better Public Health
                </h5>
                <p class="mb-10">‘좋은 치료제, 넘치는 건강’ 명인제약 입니다.</p>
              </VCol>

              <h4 class="text-h4 mb-8">로그인</h4>
              <VForm @submit.prevent="() => {}">
                <VRow>
                  <!-- companycode -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.companycode"
                      autofocus
                      label="회사코드"
                      type="text"
                      placeholder="회사코드 입력"
                      prepend-inner-icon="tabler-building-community"
                      clearable
                      @keydown.esc="onClear1"
                    />
                  </VCol>

                  <!-- userid -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.userid"
                      label="아이디 입력"
                      type="text"
                      placeholder="아이디 입력"
                      prepend-inner-icon="tabler-user"
                      clearable
                      @keydown.esc="onClear2"
                    />
                  </VCol>

                  <!-- password -->
                  <VCol cols="12">
                    <AppTextField
                      v-model="form.password"
                      label="비밀번호"
                      placeholder="비밀번호 입력"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      prepend-inner-icon="tabler-lock"
                      clearable
                      @keydown.esc="onClear3"
                      :append-inner-icon="
                        isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                      "
                      @click:append-inner="
                        isPasswordVisible = !isPasswordVisible
                      "
                    />

                    <!-- remember me checkbox -->
                    <div
                      class="d-flex align-center justify-space-between flex-wrap my-6"
                    >
                      <VCheckbox v-model="form.remember" label="아이디 저장" />

                      <RouterLink
                        class="text-primary"
                        :to="{
                          name: 'pages-authentication-forgot-password-v1',
                        }"
                      >
                        비밀번호 재설정
                      </RouterLink>
                    </div>

                    <!-- login button -->
                    <VBtn block type="submit"> 로그인</VBtn>
                  </VCol>

                  <!-- create account -->
                  <VCol cols="12" class="text-body-2 text-center">
                    <span class="d-inline-block"> 관리자에게 계정요청 </span>
                    <RouterLink
                      class="text-primary ms-1 d-inline-block text-body-2"
                      :to="{ name: 'pages-authentication-register-v1' }"
                    >
                      바로가기
                    </RouterLink>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCard>
          <div class="d-flex align-center justify-center footer">
            <span class="d-flex align-center text-body-2">
              &copy;
              {{ new Date().getFullYear() }}
              명인제약 by UBCare All Right Reserved.
            </span>
          </div>
        </VCol>
      </VRow>
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
.app-text-field {
  &:focus {
    label {
      color: rgb(230, 0, 18) !important;
    }
  }
}
.app-text-field
  .v-label:has(
    + .v-input .v-field.v-field--focused .v-field__outline.text-primary
  ) {
  color: rgb(230, 0, 18) !important;
}
</style>
