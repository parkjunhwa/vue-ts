<script setup lang="ts">
import * as demoCode from "@/views/demos/components/snackbar/demoCodeSnackbar";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-snackbar</code> component는 사용자에게 빠른 메시지를 표시하는
          데 사용됩니다. 스낵바는 위치 지정, 제거 지연 및 콜백을 지원합니다.
        </p>

        <DemoSnackbarBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 With Action -->
      <AppCardCode title="With Action" :code="demoCode.withAction">
        <p>
          <code>actions</code> slot을 사용하여 액션 버튼을 추가합니다. 가장
          간단한 형태의 <code>v-snackbar</code>는 사용자에게 임시로 닫힐 수 있는
          알림을 표시합니다.
        </p>

        <DemoSnackbarWithAction />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Multi line -->
      <AppCardCode title="Multi Line" :code="demoCode.multiLine">
        <p>
          <code>multi-line</code> property은 <code>v-snackbar</code>의 높이를
          확장하여 콘텐츠를 위한 공간을 조금 더 확보해 줍니다.
        </p>

        <DemoSnackbarMultiLine />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Timeout -->
      <AppCardCode title="Timeout" :code="demoCode.timeout">
        <p>
          <code>timeout</code> property를 사용하면 <code>v-snackbar</code>가
          숨겨지기 전에 지연 시간을 사용자 지정할 수 있습니다.
        </p>

        <DemoSnackbarTimeout />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Vertical -->
      <AppCardCode title="Vertical" :code="demoCode.vertical">
        <p>
          <code>vertical</code> property 속성을 사용하면
          <code>v-snackbar</code>의 콘텐츠를 쌓을 수 있습니다.
        </p>

        <DemoSnackbarVertical />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Position -->
      <AppCardCode title="Position" :code="demoCode.position">
        <p>
          <code>location</code> prop 을 사용하여 스낵바의 위치를 변경합니다.
        </p>

        <DemoSnackbarPosition />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Variants -->
      <AppCardCode title="Variants" :code="demoCode.variants">
        <p>
          <code>shaped</code>, <code>rounded</code>, <code>color</code>,
          <code>text</code>, <code>outlined</code>, <code>tile</code> 등의
          props을 사용하여 스낵바에 다양한 스타일을 적용하세요.
        </p>

        <DemoSnackbarVariants />
      </AppCardCode>
    </VCol>
    <VCol cols="12" md="6">
      <!-- 👉 Transition -->
      <AppCardCode title="Transition" :code="demoCode.transition">
        <p>
          <code>transition</code> prop 을 사용하여 구성 요소 전환을 설정합니다.
        </p>

        <DemoSnackbarTransition />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
