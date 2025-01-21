<script lang="ts" setup>
import * as demoCode from "@/views/demos/forms/form-elements/combobox/demoCodeCombobox";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          콤보박스를 사용하면 제공된 항목 목록에 없는 새 값을 사용자가 생성할 수
          있도록 허용할 수 있습니다.
        </p>
        <DemoComboboxBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>Density</code> 속성을 사용하여 콤보박스의 높이를 줄이고 목록
          항목의 최대 높이를 낮출 수 있습니다. 사용 가능한 옵션은
          <code>default</code>, <code>comfortable</code>,
          <code>compact</code>입니다.
        </p>
        <DemoComboboxDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          <code>variant</code> 속성의 <code>solo</code>, <code>outlined</code>,
          <code>underlined</code>, <code>filled</code>,
          <code>plain</code> 옵션을 사용하여 콤보박스의 스타일을 변경할 수
          있습니다.
        </p>
        <DemoComboboxVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Multiple -->
      <AppCardCode title="Multiple" :code="demoCode.multiple">
        <p>
          이전에는 태그(tag) 기능으로 알려졌으며, 사용자가 하나 이상의 값을
          입력할 수 있습니다.
        </p>
        <DemoComboboxMultiple />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 No data with chips -->
      <AppCardCode title="No data with chips" :code="demoCode.noDataWithChips">
        <p>
          이전에는 태그(tag) 기능으로 알려졌으며, 사용자가 하나 이상의 값을
          입력할 수 있습니다.
        </p>
        <DemoComboboxNoDataWithChips />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Clearable -->

      <AppCardCode title="Clearable" :code="demoCode.clearable">
        <p>
          <code>clearable</code> 속성을 사용하여 콤보박스를 초기화할 수
          있습니다.
        </p>
        <DemoComboboxClearable />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
