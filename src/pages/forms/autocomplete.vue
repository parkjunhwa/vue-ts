<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/autocomplete/demoCodeAutocomplete";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code> v-autocomplete </code> component는 간단하고 유연한 자동 검색
          기능을 제공합니다. 이 기능은 대규모 데이터 세트를 검색하거나 API에서
          동적으로 정보를 가져올 때 유용합니다.
        </p>

        <DemoAutocompleteBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code> density </code> prop 을 사용하여 구성 요소 내에서 수직 간격을
          조정할 수 있습니다. 사용 가능한 옵션은 : <code>default</code>,
          <code>comfortable</code>, <code>compact</code>입니다.
        </p>

        <DemoAutocompleteDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="12">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          Use <code>Solo</code>, <code>Outlined</code>, <code>Underlined</code>,
          <code>Filled</code> and <code>Plain</code> options of
          <code>variant</code> prop 의 <code>Solo</code>, <code>Outlined</code>,
          <code>Underlined</code>, <code>Filled</code> <code>Plain</code>을
          사용하여 자동 완성의 외관을 변경합니다.
        </p>

        <DemoAutocompleteVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Multiple Select -->
      <AppCardCode title="Multiple" :code="demoCode.multiple">
        <p>
          <code>multiple</code> prop 을 사용하여 여러 개를 선택합니다. 값에 맞는
          배열을 허용합니다
        </p>

        <DemoAutocompleteMultiple />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Clearable input -->
      <AppCardCode title="Clearable" :code="demoCode.clearable">
        <p>
          <code>clearable</code> prop을 사용하여 입력 클리어 기능을 추가합니다.
        </p>

        <DemoAutocompleteClearable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Chips -->
      <AppCardCode title="Chips" :code="demoCode.chips">
        <p>
          se <code> chips </code> prop 을 사용하여 칩을 선택적으로 사용합니다.
        </p>

        <DemoAutocompleteChips />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom Filter -->
      <AppCardCode title="Custom-Filter" :code="demoCode.customFilter">
        <p>
          <code> custom-filter </code> prop 은 각 개별 항목을 커스텀 로직으로
          필터링하는 데 사용할 수 있습니다. 예를 들어, 이름과 약어를 기반으로
          상태를 필터링할 것입니다
        </p>

        <DemoAutocompleteCustomFilter />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 With slots -->
      <AppCardCode title="Slots" :code="demoCode.slots">
        <p>
          슬롯의 힘으로 선택 항목의 시각적 출력을 사용자 지정할 수 있습니다. 이
          예제에서는 칩과 목록 항목 모두에 대한 프로필 사진을 소품을 사용하여
          추가합니다.
        </p>

        <DemoAutocompleteSlots />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Asynchronous Items -->
      <AppCardCode title="Async items" :code="demoCode.asyncItems">
        <p>
          때때로 검색 쿼리를 기반으로 외부에서 데이터를 로드해야 할 때가
          있습니다.
        </p>

        <DemoAutocompleteAsyncItems />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 State Selector -->
      <AppCardCode title="State Selector" :code="demoCode.stateSelector">
        <p>
          v-자동완성 슬롯과 전환을 결합하여 아래 상태 선택기와 같은 스타일리시한
          토글 가능한 자동완성 필드를 만들 수 있습니다.
        </p>

        <DemoAutocompleteStateSelector />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="validation" :code="demoCode.validation">
        <p>
          <code>rules</code> prop 규칙 소품을 사용하여 자동 완성을 검증합니다.
          함수, 부울 및 문자열 유형의 혼합 배열을 허용합니다. 함수는 입력 값을
          인수로 전달하며 true/false 또는 오류 메시지가 포함된 문자열을 반환해야
          합니다..
        </p>

        <DemoAutocompleteValidation />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
