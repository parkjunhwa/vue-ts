<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/textarea/demoCodeTextarea";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-textarea</code>는 가장 기본적인 형태에서 여러 줄의 텍스트를
          입력할 수 있는 필드로, 긴 텍스트 입력에 유용합니다.
        </p>
        <DemoTextareaBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Auto Grow -->
      <AppCardCode title="Auto Grow" :code="demoCode.autoGrow">
        <p>
          <code>auto-grow</code> 속성을 사용하면 입력한 텍스트의 길이가 지정된
          크기를 초과할 경우 자동으로 크기가 증가합니다.
        </p>
        <DemoTextareaAutoGrow />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          <code>variant</code> 속성의 <code>filled</code>, <code>plain</code>,
          <code>outlined</code>, <code>solo</code>,
          <code>underlined</code> 옵션을 사용하여 텍스트 입력 필드의 스타일을
          변경할 수 있습니다.
        </p>
        <DemoTextareaVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 States -->
      <AppCardCode title="States" :code="demoCode.states">
        <p>
          <code>disabled</code> 및 <code>readonly</code> 속성을 사용하여 텍스트
          입력 필드의 상태를 변경할 수 있습니다.
        </p>
        <DemoTextareaStates />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Browser autocomplete -->
      <AppCardCode
        title="Browser autocomplete"
        :code="demoCode.browserAutocomplete"
      >
        <p>
          <code>autocomplete</code> 속성을 사용하면 브라우저가 사용자 입력을
          예측할 수 있도록 설정할 수 있습니다.
        </p>
        <DemoTextareaBrowserAutocomplete />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Clearable -->
      <AppCardCode title="Clearable" :code="demoCode.clearable">
        <p>
          <code>clearable</code> 속성을 사용하면 <code>v-textarea</code>의
          내용을 지울 수 있으며, <code>clearable-icon</code> 속성을 통해
          아이콘을 사용자 정의할 수 있습니다.
        </p>
        <DemoTextareaClearable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Counter -->
      <AppCardCode title="Counter" :code="demoCode.counter">
        <p>
          <code>counter</code> 속성을 사용하면 <code>v-textarea</code>에 입력할
          수 있는 최대 글자 수를 사용자에게 안내할 수 있습니다.
        </p>
        <DemoTextareaCounter />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          <code>append-icon</code>, <code>prepend-icon</code>,
          <code>append-inner-icon</code>, <code>prepend-inner-icon</code> 속성을
          사용하여 <code>v-textarea</code>에 아이콘을 추가할 수 있습니다.
        </p>
        <DemoTextareaIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Rows -->
      <AppCardCode title="Rows" :code="demoCode.rows">
        <p>
          <code>rows</code> 속성을 사용하여 텍스트 입력 필드의 기본 행 개수를
          설정할 수 있으며, <code>row-height</code> 속성을 함께 사용하여 행의
          높이를 조정할 수 있습니다.
        </p>
        <DemoTextareaRows />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 No resize -->
      <AppCardCode title="No resize" :code="demoCode.noResize">
        <p>
          <code>no-resize</code> 속성을 사용하면 입력한 내용의 길이와 관계없이
          <code>v-textarea</code>의 크기를 고정할 수 있습니다.
        </p>
        <DemoTextareaNoResize />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="Validation" :code="demoCode.validation">
        <p>
          <code>rules</code> 속성을 사용하여 텍스트 입력 필드의 유효성을 검사할
          수 있습니다.
        </p>
        <DemoTextareaValidation />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
