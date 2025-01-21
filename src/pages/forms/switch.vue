<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/switch/demoCodeSwitch";
</script>

<template>
  <VRow>
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-switch</code>는 가장 기본적인 형태에서 두 가지 값 사이를
          전환할 수 있도록 합니다.
        </p>
        <DemoSwitchBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Inset -->
      <AppCardCode title="Inset" :code="demoCode.inset">
        <p>
          기본 <code>inset</code> 스위치를 변경하려면 <code>inset</code> 속성을
          <code>false</code>로 설정하면 됩니다.
        </p>
        <DemoSwitchInset />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>color</code> 속성을 사용하여 내장된 색상 및 컨텍스트 이름을
          이용해 스위치의 색상을 변경할 수 있습니다.
        </p>
        <DemoSwitchColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Model as array -->
      <AppCardCode title="Model as array" :code="demoCode.modelAsArray">
        <p>
          여러 개의 <code>v-switch</code>가 동일한 <code>v-model</code>을
          공유하도록 배열을 사용할 수 있습니다.
        </p>
        <DemoSwitchModelAsArray />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Label slot -->
      <AppCardCode title="Label slot" :code="demoCode.labelSlot">
        <p>
          <code>label</code> 슬롯을 사용하여 스위치의 레이블을 정의할 수 있으며,
          HTML 콘텐츠도 사용할 수 있습니다.
        </p>
        <DemoSwitchLabelSlot />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 True and False Value -->
      <AppCardCode
        title="True and False Value"
        :code="demoCode.trueAndFalseValue"
      >
        <p>
          <code>false-value</code> 및 <code>true-value</code> 속성을 사용하여
          스위치의 참/거짓 상태 값을 설정할 수 있습니다.
        </p>
        <DemoSwitchTrueAndFalseValue />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 States -->
      <AppCardCode title="States" :code="demoCode.states">
        <p>
          <code>v-switch</code>는 <code>default</code>, <code>disabled</code>,
          <code>loading</code>과 같은 다양한 상태를 가질 수 있습니다.
        </p>
        <DemoSwitchStates />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
