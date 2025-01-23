<script lang="ts" setup>
import { VForm } from "vuetify/components/VForm";

const requiredField = ref("");
const numberBetween10to20 = ref("");
const onlyConsistNumber = ref("");
const matchRegularEx = ref("");
const onlyAlphabeticCharacters = ref("");
const specifiedLength = ref("");
const password = ref("");
const digits = ref("");
const repeatPassword = ref("");
const onlyAlphabeticNumbersDashesUnderscores = ref("");
const email = ref("");
const validURL = ref("");
const refForm = ref<VForm>();
</script>

<template>
  <VForm ref="refForm" @submit.prevent>
    <VRow>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="필수 항목입니다."
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="10과 20 사이의 숫자를 입력하세요"
          :rules="[
            requiredValidator,
            betweenValidator(numberBetween10to20, 10, 20),
          ]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="숫자로만 구성되어야 합니다"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="지정된 정규식을 따라야 합니다: ^([0-9]+)$ - 숫자만 입력 가능"
          :rules="[
            requiredValidator,
            regexValidator(matchRegularEx, '^([0-9]+)$'),
          ]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="알파벳 문자만 입력 가능"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="길이는 정확히 3자여야 합니다."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="비밀번호 입력 필드"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="숫자로만 이루어져야 하며 정확히 3자리여야 합니다"
          :rules="[
            requiredValidator,
            lengthValidator(digits, 3),
            integerValidator,
          ]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="비밀번호를 다시 입력하세요 (일치해야 합니다)"
          type="password"
          :rules="[
            requiredValidator,
            confirmedValidator(repeatPassword, password),
          ]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="알파벳, 숫자, 대시(-), 밑줄(_)만 입력 가능"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="올바른 이메일 주소를 입력하세요"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12" md="6">
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="올바른 URL을 입력하세요"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn type="submit" @click="refForm?.validate()"> Submit </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
