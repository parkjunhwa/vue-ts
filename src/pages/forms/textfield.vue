<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/textfield/demoCodeTextfield";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>텍스트 필드 컴포넌트는 사용자가 정보를 입력할 수 있도록 합니다.</p>
        <DemoTextfieldBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 텍스트 필드의 높이를 조절할 수
          있습니다. 사용 가능한 옵션은 <code>default</code>,
          <code>comfortable</code>, <code>compact</code>입니다.
        </p>
        <DemoTextfieldDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Variant -->
      <AppCardCode title="Variant" :code="demoCode.variant">
        <p>
          <code>variant</code> 속성의 <code>solo</code>, <code>filled</code>,
          <code>outlined</code>, <code>plain</code>,
          <code>underlined</code> 옵션을 사용하여 텍스트 필드의 스타일을 변경할
          수 있습니다.
        </p>
        <DemoTextfieldVariant />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 State -->
      <AppCardCode title="State" :code="demoCode.state">
        <p>
          텍스트 필드는 <code>disabled</code> 또는 <code>readonly</code> 상태로
          설정할 수 있습니다.
        </p>
        <DemoTextfieldState />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Counter -->
      <AppCardCode title="Counter" :code="demoCode.counter">
        <p>
          <code>counter</code> 속성을 사용하여 최대 입력 가능한 문자 수를
          사용자에게 안내할 수 있습니다.
        </p>
        <DemoTextfieldCounter />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Clearable -->
      <AppCardCode title="Clearable" :code="demoCode.clearable">
        <p>
          <code>clearable</code> 속성을 사용하면 텍스트 필드를 초기화할 수
          있으며, <code>clear-icon</code> 속성을 사용하여 아이콘을 변경할 수
          있습니다.
        </p>
        <DemoTextfieldClearable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom Colors -->
      <AppCardCode title="Custom Colors" :code="demoCode.customColors">
        <p>
          <code>color</code> 속성을 사용하여 입력 필드의 테두리 색상을 변경할 수
          있습니다.
        </p>
        <DemoTextfieldCustomColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          <code>prepend-icon</code>, <code>append-icon</code>,
          <code>append-inner-icon</code>, <code>prepend-inner-icon</code> 속성을
          사용하여 텍스트 필드에 아이콘을 추가할 수 있습니다.
        </p>
        <DemoTextfieldIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Prefixes and suffixes -->
      <AppCardCode
        title="Prefixes and suffixes"
        :code="demoCode.prefixesAndSuffixes"
      >
        <p>
          <code>prefix</code> 및 <code>suffix</code> 속성을 사용하여 텍스트 필드
          앞뒤에 수정할 수 없는 텍스트를 추가할 수 있습니다.
        </p>
        <DemoTextfieldPrefixesAndSuffixes />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Single line  -->
      <AppCardCode title="Single line" :code="demoCode.singleLine">
        <p>
          <code>single-line</code> 속성을 사용하면 포커스되거나 값이 입력될 때
          라벨이 떠오르지 않습니다.
        </p>
        <DemoTextfieldSingleLine />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Validation -->
      <AppCardCode title="Validation" :code="demoCode.validation">
        <p>
          Vuetify는 <code>rules</code> 속성을 사용하여 간단한 유효성 검사를
          제공합니다.
        </p>
        <DemoTextfieldValidation />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icon events -->
      <AppCardCode title="Icon events" :code="demoCode.iconEvents">
        <p>
          <code>click:prepend</code>, <code>click:append</code>,
          <code>click:append-inner</code>, <code>click:clear</code> 이벤트는
          해당 아이콘을 클릭할 때 발생합니다.
        </p>
        <DemoTextfieldIconEvents />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Label Slot -->
      <AppCardCode title="Label Slot" :code="demoCode.labelSlot">
        <p>
          <code>label</code> 슬롯을 사용하여 HTML 콘텐츠를 포함한 사용자 정의
          레이블을 사용할 수 있습니다.
        </p>
        <DemoTextfieldLabelSlot />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Password input -->
      <AppCardCode title="Password input" :code="demoCode.passwordInput">
        <p>
          HTML 입력 <code>type</code>을 <code>password</code>로 설정하고 아이콘
          및 콜백을 추가하여 가시성을 제어할 수 있습니다.
        </p>
        <DemoTextfieldPasswordInput />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icon slots -->
      <AppCardCode title="Icon slots" :code="demoCode.iconSlots">
        <p>
          <code>prepend</code>, <code>append</code>,
          <code>append-inner</code> 아이콘 대신 슬롯을 사용하여 입력 필드의
          기능을 확장할 수 있습니다.
        </p>
        <DemoTextfieldIconSlots />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
