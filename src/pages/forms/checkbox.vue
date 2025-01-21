<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/checkbox/demoCodeCheckbox";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-checkbox</code>는 가장 간단한 형태로 두 개의 값 간 전환을
          제공합니다.
        </p>

        <DemoCheckboxBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 입력 필드의 높이를 줄일 수
          있습니다. 사용 가능한 옵션은 <code>default</code>,
          <code>comfortable</code>, <code>compact</code>입니다.
        </p>
        <DemoCheckboxDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>color</code> 속성을 사용하여 내장된 색상 및 컨텍스트 이름을
          활용하여 체크박스의 색상을 변경할 수 있습니다.
        </p>
        <DemoCheckboxColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Model as array -->
      <AppCardCode title="Model as array" :code="demoCode.modelAsArray">
        <p>
          여러 개의 <code>v-checkbox</code>가 하나의 <code>v-model</code>을
          공유하도록 배열을 사용할 수 있습니다.
        </p>
        <DemoCheckboxModelAsArray />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icon -->
      <AppCardCode title="Icon" :code="demoCode.icon">
        <p>
          <code>false-icon</code> 및 <code>true-icon</code> 속성을 사용하여
          체크박스의 아이콘을 변경할 수 있습니다.
        </p>
        <DemoCheckboxIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Checkbox Value -->
      <AppCardCode title="Checkbox Value" :code="demoCode.checkboxValue">
        <p>
          <code>false-value</code> 및 <code>true-value</code> 속성을 사용하여
          참/거짓 상태에 대한 값을 설정할 수 있습니다.
        </p>
        <DemoCheckboxCheckboxValue />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 States -->
      <AppCardCode title="States" :code="demoCode.states">
        <p>
          <code>v-checkbox</code>는 <code>기본</code>, <code>비활성화됨</code>,
          <code>부분 선택</code>과 같은 다양한 상태를 가질 수 있습니다.
        </p>
        <DemoCheckboxStates />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Label Slot -->
      <AppCardCode title="Label Slot" :code="demoCode.labelSlot">
        <p>
          체크박스 라벨은 <code>label</code> 슬롯에서 정의할 수 있으며, 이를
          통해 HTML 콘텐츠를 사용할 수 있습니다.
        </p>
        <DemoCheckboxLabelSlot />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Inline text-field -->
      <AppCardCode title="Inline text-field" :code="demoCode.inlineTextField">
        <p>
          <code>v-checkbox</code>를 <code>v-text-field</code>와 같은 다른 구성
          요소와 나란히 배치할 수 있습니다.
        </p>
        <DemoCheckboxInlineTextField />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
