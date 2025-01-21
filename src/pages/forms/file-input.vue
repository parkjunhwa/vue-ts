<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/file-input/demoCodeFileInput";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-file-input</code> 컴포넌트는 파일을 선택하는 데 사용됩니다.
        </p>

        <DemoFileInputBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 파일 입력의 높이를 줄일 수
          있습니다. 사용 가능한 옵션은 <code>default</code>,
          <code>comfortable</code>, <code>compact</code>입니다.
        </p>
        <DemoFileInputDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          <code>variant</code> 속성의 <code>solo</code>, <code>filled</code>,
          <code>outlined</code>, <code>plain</code>,
          <code>underlined</code> 옵션을 사용하여 파일 입력의 외형을 변경할 수
          있습니다.
        </p>

        <DemoFileInputVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Accept -->
      <AppCardCode title="Accept" :code="demoCode.accept">
        <p></p>
        <p>
          <code>v-file-input</code> 컴포넌트는 특정 미디어 형식/파일 유형만
          허용하도록 설정할 수 있습니다.
        </p>
        <DemoFileInputAccept />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Chips -->
      <AppCardCode title="Chips" :code="demoCode.chips">
        <p>
          <code>chip</code> 속성을 사용하여 선택한 파일을 칩 형태로 표시할 수
          있습니다.
        </p>
        <DemoFileInputChips />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Counter -->
      <AppCardCode title="Counter" :code="demoCode.counter">
        <p>
          <code>show-size</code> 속성과 <code>counter</code>를 함께 사용하면 총
          파일 개수와 크기가 입력란 아래에 표시됩니다.
        </p>
        <DemoFileInputCounter />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Multiple -->
      <AppCardCode title="Multiple" :code="demoCode.multiple">
        <p>
          <code>multiple</code> 속성을 사용하면 <code>v-file-input</code>에서
          여러 개의 파일을 동시에 선택할 수 있습니다.
        </p>
        <DemoFileInputMultiple />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Prepend icon -->
      <AppCardCode title="Prepend icon" :code="demoCode.prependIcon">
        <p>
          <code>v-file-input</code>에는 기본 <code>prepend-icon</code>이 있으며,
          컴포넌트에서 설정하거나 전역적으로 조정할 수 있습니다.
        </p>
        <DemoFileInputPrependIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Show size -->
      <AppCardCode title="Show size" :code="demoCode.showSize">
        <p>
          선택한 파일(들)의 크기는 <code>show-size</code> 속성을 사용하여 표시할
          수 있습니다.
        </p>
        <DemoFileInputShowSize />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="Validation" :code="demoCode.validation">
        <p>
          <code>rules</code> 속성을 사용하여 사용자 정의 유효성 검사 규칙을 만들
          수 있습니다.
        </p>
        <DemoFileInputValidation />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Selection slot -->
      <AppCardCode title="Selection slot" :code="demoCode.selectionSlot">
        <p>
          <code>selection</code> 슬롯을 사용하여 입력 선택 항목의 모양을 사용자
          지정할 수 있습니다.
        </p>
        <DemoFileInputSelectionSlot />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Loading -->
      <AppCardCode title="Loading" :code="demoCode.loading">
        <p>
          <code>loading</code> 속성을 사용하면 선형 진행 바를 표시할 수
          있습니다.
        </p>
        <DemoFileInputLoading />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
