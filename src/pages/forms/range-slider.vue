<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/range-slider/demoCodeRangeSlider";
</script>

<template>
  <VRow>
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-slider</code> 컴포넌트는 숫자 입력을 더 잘 시각화할 수 있도록
          도와줍니다.
        </p>
        <DemoRangeSliderBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Disabled -->
      <AppCardCode title="Disabled" :code="demoCode.disabled">
        <p>
          <code>disabled</code> 속성이 설정된 슬라이더는 상호작용할 수 없습니다.
        </p>
        <DemoRangeSliderDisabled />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Color -->
      <AppCardCode title="Color" :code="demoCode.color">
        <p>
          <code>color</code> 속성을 사용하여 슬라이더의 색상을 설정할 수
          있습니다. <code>track-color</code> 속성을 사용하면 슬라이더의 채워지지
          않은 트랙 색상을 설정할 수 있습니다.
        </p>
        <DemoRangeSliderColor />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Step -->
      <AppCardCode title="Step" :code="demoCode.step">
        <p>
          <code>v-range-slider</code>는 1 이외의 단계를 가질 수 있습니다. 이는
          더 정밀하거나 덜 정밀한 값 조정이 필요한 경우 유용할 수 있습니다.
        </p>
        <DemoRangeSliderStep />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Thumb label -->
      <AppCardCode title="Thumb label" :code="demoCode.thumbLabel">
        <p>
          <code>tick-labels</code> 속성과 <code>thumb-label</code> 슬롯을 함께
          사용하면 매우 맞춤화된 슬라이더를 만들 수 있습니다.
        </p>
        <DemoRangeSliderThumbLabel />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Vertical -->
      <AppCardCode title="Vertical" :code="demoCode.vertical">
        <p>
          <code>vertical</code> 속성을 사용하면 슬라이더를 세로 방향으로 변경할
          수 있습니다. 슬라이더의 높이를 조정하려면 CSS를 사용하세요.
        </p>
        <DemoRangeSliderVertical />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
