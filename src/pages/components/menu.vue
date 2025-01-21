<script setup lang="ts">
import * as demoCode from "@/views/demos/components/menu/demoCodeMenu";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>메뉴를 활성화하는 요소를 활성화 슬롯에 넣는 것을 잊지 마세요.</p>

        <DemoMenuBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom transitions -->
      <AppCardCode
        title="Custom transitions"
        :code="demoCode.customTransitions"
      >
        <p>
          Vuetify에는 3가지 표준 전환, <code>scale</code>, <code>slide-x</code>,
          <code>slide-y</code>가 제공됩니다. <code>transition</code> prop을
          사용하여 메뉴에 전환을 추가합니다.
        </p>
        <DemoMenuCustomTransitions />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Location -->
      <AppCardCode title="Location" :code="demoCode.location">
        <p><code>location</code> prop 으로 위치를 지정할 수 있습니다..</p>

        <DemoMenuLocation />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Open on hover -->
      <AppCardCode title="Open on hover" :code="demoCode.openOnHover">
        <p><code>open-on-hover</code> prop 은 마우스 hover시 동작.</p>

        <DemoMenuOpenOnHover />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Popover -->
      <AppCardCode title="Popover" :code="demoCode.popover">
        <p>
          메뉴는 열릴 때 정적으로 구성될 수 있으므로 팝오버로 기능할 수
          있습니다. 이는 메뉴 콘텐츠 내에 여러 개의 대화형 항목이 있는 경우
          유용할 수 있습니다.
        </p>

        <DemoMenuPopover />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Activator and tooltip -->
      <AppCardCode
        title="Activator and tooltip"
        :code="demoCode.activatorAndTooltip"
      >
        <p>
          새로운 <code>v-slot</code> 구문에서는 <code>v-menu</code>와
          <code>v-tooltip</code>이 동일한 활성화 버튼에 연결된 활성화 장치와
          같은 중첩 활성화 장치가 올바르게 작동하려면 특정 설정이 필요합니다.
        </p>

        <DemoMenuActivatorAndTooltip />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
