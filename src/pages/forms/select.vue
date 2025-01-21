<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/select/demoCodeSelect";
</script>

<template>
  <VRow>
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          선택 필드 컴포넌트는 사용자가 목록에서 옵션을 선택하여 정보를 입력할
          수 있도록 합니다.
        </p>
        <DemoSelectBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 필드 높이를 줄이고, 리스트 항목의
          최대 높이를 낮출 수 있습니다.
        </p>
        <DemoSelectDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          <code>variant</code> 속성의 <code>filled</code>,
          <code>outlined</code>, <code>solo</code>, <code>underlined</code>,
          <code>plain</code> 옵션을 사용하여 선택 필드의 외형을 변경할 수
          있습니다.
        </p>
        <DemoSelectVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom text and value -->
      <AppCardCode
        title="Custom text and value"
        :code="demoCode.customTextAndValue"
      >
        <p>
          항목 배열 내에서 제목과 값 필드에 해당하는 특정 속성을 지정할 수
          있습니다. 이 예제에서는 <code>return-object</code> 속성을 사용하여
          선택한 항목의 전체 객체를 반환하도록 설정합니다.
        </p>
        <DemoSelectCustomTextAndValue />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          커스텀 <code>prepend</code> 또는 <code>append</code> 아이콘을 사용할
          수 있습니다.
        </p>
        <DemoSelectIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Chips -->
      <AppCardCode title="Chips" :code="demoCode.chips">
        <p>
          <code>chips</code> 속성을 사용하여 선택된 옵션을 칩 형태로 표시할 수
          있습니다.
        </p>
        <DemoSelectChips />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Menu Props -->
      <AppCardCode title="Menu Props" :code="demoCode.menuProps">
        <p>
          <code>menuProps</code> 속성을 사용하여 <code>v-menu</code>에 사용자
          정의 속성을 직접 전달할 수 있습니다.
        </p>
        <DemoSelectMenuProps />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Multiple -->
      <AppCardCode title="Multiple" :code="demoCode.multiple">
        <p>
          <code>multiple</code> 속성을 사용하여 여러 개의 옵션을 선택할 수
          있습니다.
        </p>
        <DemoSelectMultiple />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Selection slot -->
      <AppCardCode title="Selection slot" :code="demoCode.selectionSlot">
        <p>
          <code>selection</code> 슬롯을 사용하여 입력 필드에서 선택된 값을
          표시하는 방식을 사용자 정의할 수 있습니다.
        </p>
        <DemoSelectSelectionSlot />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
