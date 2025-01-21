<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/slider/demoCodeSlider";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-slider</code> 컴포넌트는 숫자 입력을 더 잘 시각화할 수 있도록
          도와줍니다.
        </p>
        <DemoSliderBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Disabled and Readonly -->
      <AppCardCode
        title="Disabled and Readonly"
        :code="demoCode.disabledAndReadonly"
      >
        <p>
          <code>disabled</code> 및 <code>readonly</code> 속성이 설정된
          슬라이더는 상호작용할 수 없습니다.
        </p>
        <DemoSliderDisabledAndReadonly />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>color</code>, <code>track-color</code>,
          <code>thumb-color</code> 속성을 사용하여 슬라이더의 색상을 설정할 수
          있습니다.
        </p>
        <DemoSliderColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          <code>append-icon</code> 및 <code>prepend-icon</code> 속성을 사용하여
          슬라이더에 아이콘을 추가할 수 있습니다.
        </p>
        <DemoSliderIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Step -->
      <AppCardCode title="Step" :code="demoCode.step">
        <p>
          <code>step</code> 속성을 사용하여 슬라이더의 정밀도를 조절하고, 이동할
          수 있는 간격을 설정할 수 있습니다.
        </p>
        <DemoSliderStep />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="Validation" :code="demoCode.validation">
        <p>
          Vuetify는 <code>rules</code> 속성을 통해 간단한 유효성 검사를
          제공합니다.
        </p>
        <DemoSliderValidation />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Min and Max -->
      <AppCardCode title="Min and Max" :code="demoCode.minAndMax">
        <p>
          슬라이더의 <code>min</code> 및 <code>max</code> 값을 설정할 수
          있습니다.
        </p>
        <DemoSliderMinAndMax />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Size -->
      <AppCardCode title="Size" :code="demoCode.size">
        <p>
          <code>thumb-size</code>, <code>tick-size</code>,
          <code>track-size</code> 속성을 사용하여 슬라이더의 손잡이, 틱, 트랙
          크기를 조절할 수 있습니다.
        </p>
        <DemoSliderSize />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Thumb -->
      <AppCardCode title="Thumb" :code="demoCode.thumb">
        <p>
          슬라이더를 움직일 때 또는 항상 손잡이 레이블을 표시하려면
          <code>thumb-label</code> 속성을 사용할 수 있습니다.
        </p>
        <DemoSliderThumb />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Ticks -->
      <AppCardCode title="Ticks" :code="demoCode.ticks">
        <p>
          눈금은 사용자가 특정 값으로 슬라이더를 이동할 수 있도록 미리 설정된
          값들을 나타냅니다.
        </p>
        <DemoSliderTicks />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Vertical -->
      <AppCardCode title="Vertical" :code="demoCode.vertical">
        <p>
          <code>vertical</code> 속성을 사용하여 슬라이더를 세로 방향으로 변경할
          수 있습니다.
        </p>
        <DemoSliderVertical />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Append text field -->
      <AppCardCode title="Append text field" :code="demoCode.appendTextField">
        <p>
          슬라이더는 <code>append</code> 슬롯을 통해 <code>v-text-field</code>와
          같은 다른 컴포넌트와 결합하여 추가 기능을 제공할 수 있습니다.
        </p>
        <DemoSliderAppendTextField />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Append and prepend -->
      <AppCardCode title="Append and prepend" :code="demoCode.appendAndPrepend">
        <p>
          <code>append</code> 및 <code>prepend</code> 슬롯을 사용하여
          <code>v-slider</code>를 원하는 방식으로 쉽게 커스터마이징할 수
          있습니다.
        </p>
        <DemoSliderAppendAndPrepend />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
