<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/radio/demoCodeRadio";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p><code>v-radio</code> 컴포넌트는 기본적인 라디오 버튼입니다.</p>

        <DemoRadioBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>color</code> 속성을 사용하여 내장된 색상 및 컨텍스트 이름을
          이용해 라디오 버튼의 색상을 변경할 수 있습니다.
        </p>
        <DemoRadioColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Inline -->
      <AppCardCode title="Inline" :code="demoCode.inline">
        <p>
          <code>inline</code> 속성을 사용하면 라디오 버튼을 가로로 정렬할 수
          있습니다.
        </p>
        <DemoRadioInline />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 컴포넌트 내부의 간격을 조정할 수
          있습니다. 사용 가능한 옵션은 <code>default</code>,
          <code>comfortable</code>, <code>compact</code>입니다.
        </p>
        <DemoRadioDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Label Slot -->
      <AppCardCode title="Label Slot" :code="demoCode.labelSlot">
        <p>
          <code>label</code> 슬롯을 사용하여 라디오 그룹의 레이블을 정의할 수
          있으며, 이를 통해 HTML 콘텐츠를 사용할 수 있습니다.
        </p>
        <DemoRadioLabelSlot />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icon -->
      <AppCardCode title="Icon" :code="demoCode.icon">
        <p>
          <code>false-icon</code> 및 <code>true-icon</code> 속성을 사용하여
          비활성 및 활성 상태의 아이콘을 설정할 수 있습니다.
        </p>
        <DemoRadioIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="Validation" :code="demoCode.validation">
        <p>
          <code>rules</code> 속성을 사용하여 라디오 버튼을 검증할 수 있습니다.
          <code>function</code>, <code>boolean</code>,
          <code>string</code> 타입이 혼합된 배열을 허용합니다. 함수는 입력 값을
          인수로 전달받으며, <code>true</code> / <code>false</code> 또는 오류
          메시지를 포함하는 문자열을 반환해야 합니다.
        </p>
        <DemoRadioValidation />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
