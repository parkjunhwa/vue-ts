<script setup lang="ts">
const isCardAddDialogVisible = ref(false);
const isPricingPlanDialogVisible = ref(false);
const isEditAddressDialogVisible = ref(false);
const isTwoFactorDialogOpen = ref(false);
const isUserInfoEditDialogVisible = ref(false);
const isShareProjectDialogVisible = ref(false);
const isReferAndEarnDialogVisible = ref(false);
const isPaymentProvidersDialogVisible = ref(false);
const isAddPaymentMethodsDialogVisible = ref(false);
const isCreateAppVisible = ref(false);

const userData = {
  id: 110,
  firstName: "Selena",
  lastName: "Kyle",
  company: "pixinvent",
  role: "Web developer",
  username: "charwomen1940",
  country: "United States",
  contact: "(829) 537-0057",
  email: "irena.dubrovna@wayne.com",
  currentPlan: "",
  status: "Active",
  avatar: "",
  taskDone: null,
  projectDone: null,
  taxId: "Tax-8894",
  language: "English",
  fullName: "Selena Kyle",
};
</script>

<template>
  <VRow>
    <!-- 👉 프로젝트 공유 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-file" />
          </template>
          <VCardTitle>프로젝트 공유</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            신용카드 정보를 빠르게 수집할 수 있으며, 내장된 입력 마스크 및 폼
            유효성 검사를 지원합니다.
          </p>

          <VBtn
            @click="isShareProjectDialogVisible = !isShareProjectDialogVisible"
          >
            보기
          </VBtn>
        </VCardText>

        <ShareProjectDialog
          v-model:is-dialog-visible="isShareProjectDialogVisible"
        />
      </VCard>
    </VCol>

    <!-- 👉 새 카드 추가 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-credit-card" />
          </template>
          <VCardTitle>새 카드 추가</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            신용카드 정보를 빠르게 수집할 수 있으며, 내장된 입력 마스크 및 폼
            유효성 검사를 지원합니다.
          </p>

          <VBtn @click="isCardAddDialogVisible = !isCardAddDialogVisible">
            보기
          </VBtn>
        </VCardText>

        <CardAddEditDialog v-model:is-dialog-visible="isCardAddDialogVisible" />
      </VCard>
    </VCol>

    <!-- 👉 가격 설정 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-currency-dollar" />
          </template>
          <VCardTitle>가격 설정</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            우아한 가격 설정 옵션 다이얼로그 예제, 페이지에서 쉽게 사용할 수
            있습니다.
          </p>

          <VBtn
            @click="isPricingPlanDialogVisible = !isPricingPlanDialogVisible"
          >
            보기
          </VBtn>
        </VCardText>

        <PricingPlanDialog
          v-model:is-dialog-visible="isPricingPlanDialogVisible"
        />
      </VCard>
    </VCol>

    <!-- 👉 추천 및 적립 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-gift" />
          </template>
          <VCardTitle>추천 & 적립</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            기존 고객이 친구 및 동료를 추천하도록 유도하는 추천 및 적립 모달을
            사용하세요.
          </p>

          <VBtn
            @click="isReferAndEarnDialogVisible = !isReferAndEarnDialogVisible"
          >
            보기
          </VBtn>
        </VCardText>

        <ReferAndEarnDialog
          v-model:is-dialog-visible="isReferAndEarnDialogVisible"
        />
      </VCard>
    </VCol>

    <!-- 👉 새 주소 추가 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-home" />
          </template>
          <VCardTitle>새 주소 추가</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            유효성 검사 및 사용자 지정 입력 지원을 갖춘 사용자 주소 입력 폼을
            제공합니다.
          </p>

          <VBtn
            @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
          >
            보기
          </VBtn>
        </VCardText>

        <AddEditAddressDialog
          v-model:is-dialog-visible="isEditAddressDialogVisible"
        />
      </VCard>
    </VCol>

    <!-- 👉 앱 생성 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-box" />
          </template>
          <VCardTitle>앱 생성</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            이 폼을 사용하여 애플리케이션 데이터를 입력하고, 페이지에서 쉽게
            사용할 수 있는 앱 생성 다이얼로그를 제공합니다.
          </p>

          <VBtn @click="isCreateAppVisible = !isCreateAppVisible"> 보기 </VBtn>
        </VCardText>
      </VCard>
      <CreateAppDialog v-model:is-dialog-visible="isCreateAppVisible" />
    </VCol>

    <!-- 👉 2단계 인증 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-lock" />
          </template>
          <VCardTitle>2단계 인증</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            2단계 인증을 활성화하여 애플리케이션의 보안을 강화하세요.
          </p>

          <VBtn @click="isTwoFactorDialogOpen = !isTwoFactorDialogOpen">
            보기
          </VBtn>
        </VCardText>

        <TwoFactorAuthDialog
          v-model:is-dialog-visible="isTwoFactorDialogOpen"
        />
      </VCard>
    </VCol>

    <!-- 👉 사용자 정보 수정 다이얼로그 -->
    <VCol cols="12" sm="6" md="4">
      <VCard class="text-high-emphasis text-center">
        <VCardItem class="d-flex flex-column gap-2">
          <template #prepend>
            <VIcon size="34" icon="tabler-lock" />
          </template>
          <VCardTitle>사용자 정보 수정</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="text-base clamp-text">
            사용자 정보를 수정하고 관리할 수 있습니다.
          </p>

          <VBtn
            @click="isUserInfoEditDialogVisible = !isUserInfoEditDialogVisible"
          >
            보기
          </VBtn>
        </VCardText>

        <UserInfoEditDialog
          v-model:is-dialog-visible="isUserInfoEditDialogVisible"
          :user-data="userData"
        />
      </VCard>
    </VCol>
  </VRow>
</template>
