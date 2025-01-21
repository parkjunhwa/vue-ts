<script setup lang="ts">
import * as demoCode from "@/views/demos/components/progress-linear/demoCodeProgressLinear";
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Progress linear color -->
    <VCol cols="12" md="6">
      <AppCardCode title="Color" :code="demoCode.color">
        <p>
          <code>color</code> 와 <code>background-color</code>을 사용하여 색상을
          설정합니다.
        </p>

        <DemoProgressLinearColor />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Buffering -->
    <VCol cols="12" md="6">
      <AppCardCode title="Buffering" :code="demoCode.buffering">
        <p>
          The primary 값은 <code>v-model</code>에 의해 제어되는 반면면, 버퍼는
          <code>buffer-value</code> prop에 의해 제어됩니다.
        </p>

        <DemoProgressLinearBuffering />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear indeterminate -->
    <VCol cols="12" md="6">
      <AppCardCode title="Indeterminate" :code="demoCode.indeterminate">
        <p>
          프로그레스 바를 지속적으로 애니메이션하려면
          <code>indeterminate</code> 을 사용하세요. 이는 연속적인 프로세스를
          나타냅니다..
        </p>

        <DemoProgressLinearIndeterminate />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Reversed -->
    <VCol cols="12" md="6">
      <AppCardCode title="Reversed" :code="demoCode.reversed">
        <p>
          <code>reverse</code>을 사용하여 반대 방향으로 계속 애니메이션을
          만듭니다. RTL도 지원됩니다.
        </p>

        <DemoProgressLinearReversed />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Rounded -->
    <VCol cols="12" md="6">
      <AppCardCode title="Rounded" :code="demoCode.rounded">
        <p>
          <code> rounded </code>prop 은 v-progress 선형 성분에 경계 반지름을
          적용하는 데 사용됩니다. 기본적으로 <code>rounded</code>을 true로
          설정했습니다. 다음을 사용하여 비활성화할 수 있습니다
          <code>:rounded='false'</code>.
        </p>
        <DemoProgressLinearRounded />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Slot -->
    <VCol cols="12" md="6">
      <AppCardCode title="Slots" :code="demoCode.slots">
        <p>
          <code>v-model</code>을 사용할 때 v-progress-linear 구성 요소는 사용자
          입력에 반응합니다. 기본 슬롯을 사용하거나 로컬 모델을 바인딩하여 진행
          상황을 표시할 수 있습니다.
        </p>

        <DemoProgressLinearSlots />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress Linear Striped -->
    <VCol cols="12" md="6">
      <AppCardCode title="Striped" :code="demoCode.striped">
        <p><code>striped</code> prop은 줄무늬 배경을 적용하는 데 사용됩니다.</p>
        <DemoProgressLinearStriped />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
