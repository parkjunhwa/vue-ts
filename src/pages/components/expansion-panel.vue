<script setup lang="ts">
import * as demoCode from "@/views/demos/components/expansion-panel/demoCodeExpansionPanel";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic  -->
      <AppCardCode title="Basic" variant="outlined" :code="demoCode.basic">
        <p>
          가장 간단한 형태의 확장 패널은 확장 가능한 항목 목록을 표시합니다.
          그러나 <code>multiple</code> prop을 사용하면 확장 패널이 명시적으로
          닫힐 때까지 열려 있을 수 있습니다.
        </p>

        <DemoExpansionPanelBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Accordion -->
      <AppCardCode
        title="Accordion"
        variant="outlined"
        :code="demoCode.accordion"
      >
        <p>
          <code>accordion</code> variant 옵션을 사용하여 아코디언 패널을
          만듭니다. <strong>Accordion</strong> 패널에는 활성 패널 주변에 여백이
          없습니다.
        </p>

        <DemoExpansionPanelAccordion />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Inset -->
      <AppCardCode title="Inset" variant="outlined" :code="demoCode.inset">
        <p><code>inset</code> variant option은 활성화되면 더 작아집니다.</p>

        <DemoExpansionPanelInset />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Popout -->
      <AppCardCode title="Popout" variant="outlined" :code="demoCode.popout">
        <p>
          <code>popout</code> variant option을 사용하면 활성화 시 확장 패널이
          확대됩니다.
        </p>

        <DemoExpansionPanelPopout />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom Icon -->
      <AppCardCode
        title="Custom Icon"
        variant="outlined"
        :code="demoCode.customIcon"
      >
        <p>
          <code>expand-icon</code> prop 또는 <code>actions</code>슬롯 으로
          사용자 정의할 수 있습니다. 또한, <code>.no-icon-rotate</code> 클래스를
          사용하여 <code>VExpansionPanels</code> 아이콘 회전을 비활성화합니다.
        </p>

        <DemoExpansionPanelCustomIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Model -->
      <AppCardCode title="Model" variant="outlined" :code="demoCode.model">
        <p>
          전체 열림 패널은은 <code>v-model</code>을 수정하여 외부에서 제어할 수
          있습니다. <code>multiple</code> prop을 사용하면 열린 항목의 인덱스를
          포함하는 배열입니다.
        </p>

        <DemoExpansionPanelModel />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 With Border -->
      <AppCardCode
        title="With Border"
        variant="outlined"
        :code="demoCode.withBorder"
      >
        <p>
          <code>.expansion-panels-width-border</code> 클래스를 사용하면 테투리가
          있는 패널을 만들 수 있습니다.
        </p>

        <DemoExpansionPanelWithBorder />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
