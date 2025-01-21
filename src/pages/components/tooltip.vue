<script setup lang="ts">
import * as demoCode from "@/views/demos/components/tooltip/demoCodeTooltip";
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Location -->
      <AppCardCode title="Location" :code="demoCode.location">
        <p>
          <code>location</code> prop 을 사용하여 도구 팁이 표시해야 할 요소의
          어느 쪽을 나타내는지 지정합니다.
        </p>

        <DemoTooltipLocation />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Events -->
      <AppCardCode title="Events" :code="demoCode.events">
        <DemoTooltipEvents />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Delay On Hover -->
      <AppCardCode title="Delay On Hover" :code="demoCode.delayOnHover">
        <p>
          툴팁이 열리는 지연 시간(ms)(open-on-hover prop이 true로 설정된 경우)
        </p>

        <DemoTooltipDelayOnHover />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 V-model Support -->
      <AppCardCode title="V-Model Support" :code="demoCode.vModelSupport">
        <p>
          툴팁 가시성은 <code>v-model</code>을 사용하여 프로그래밍 방식으로
          변경할 수 있습니다.
        </p>

        <DemoTooltipVModelSupport />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Transition -->
      <AppCardCode title="Transition" :code="demoCode.transition">
        <p>
          <code>transition</code> prop을 사용하여 component transition을
          설정합니다.
        </p>

        <DemoTooltipTransition />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Tooltip on Various Elements -->
      <AppCardCode
        title="Tooltip on Various Elements"
        :code="demoCode.tooltipOnVariousElements"
      >
        <p>Tooltips 은 모든 요소를 감쌀 수 있습니다.</p>

        <DemoTooltipTooltipOnVariousElements />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
