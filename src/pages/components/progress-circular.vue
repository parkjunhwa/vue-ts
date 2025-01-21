<script setup lang="ts">
import * as demoCode from "@/views/demos/components/progress-circular/demoCodeProgressCircular";
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Progress circular color -->
    <VCol cols="12" md="6">
      <AppCardCode title="color" :code="demoCode.color">
        <p>
          <code>v-progress-circular</code> 는 <code>color</code> prop을 사용하여
          v-progress-circular에 대체 색상을 적용할 수 있습니다.
        </p>

        <DemoProgressCircularColor />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress circular Indeterminate -->
    <VCol cols="12" md="6">
      <AppCardCode title="Indeterminate" :code="demoCode.indeterminate">
        <p>
          <code>indeterminate</code> prop을 사용하면
          <code>v-progress-circular</code>이 무한히 계속 애니메이션됩니다.
        </p>

        <DemoProgressCircularIndeterminate />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress circular Rotate -->
    <VCol cols="12" md="6">
      <AppCardCode title="Rotate" :code="demoCode.rotate">
        <p>
          <code>rotate</code> prop 은 <code>v-progress-circular</code>의 원점을
          사용자 지정할 수 있는 기능을 제공합니다.
        </p>

        <DemoProgressCircularRotate />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress circular Size and Width -->
    <VCol cols="12" md="6">
      <AppCardCode title="Size" :code="demoCode.size">
        <p>
          <code>size</code>와 <code>width</code> props을 사용하면
          <code>v-progress-circular</code>의 크기와 너비를 쉽게 변경할 수
          있습니다.
        </p>

        <DemoProgressCircularSize />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
