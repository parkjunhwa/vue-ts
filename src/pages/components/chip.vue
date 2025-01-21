<script setup lang="ts">
import * as demoCode from "@/views/demos/components/chip/demoCodeChip";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Color -->
      <AppCardCode title="Color" :code="demoCode.color">
        <p><code>color</code> prop 을 사용하여 칩의 배경 색상을 변경합니다.</p>

        <DemoChipColor />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Elevated -->
      <AppCardCode title="Elevated" :code="demoCode.elevated">
        <p>
          채워진 칩을 생성하려면 <code>elevated</code> prop 옵션을 사용하세요
        </p>

        <DemoChipElevated />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Outlined -->
      <AppCardCode title="Outlined" :code="demoCode.outlined">
        <p>
          variant 옵션을 사용하여 <code>outlined</code> 윤곽선 테두리 칩을
          만듭니다.
        </p>

        <DemoChipOutlined />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Label -->
      <AppCardCode title="Rounded" :code="demoCode.rounded">
        <p>
          둥근 칩을 사용하려면 <code>label</code> props 값을
          <strong>false</strong> 로 설정하세요 .
        </p>

        <DemoChipRounded />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Closable -->
      <AppCardCode title="Closable" :code="demoCode.closable">
        <p>
          닫을 수 있는 칩은 <code>v-model</code>을 사용하여 제어할 수 있습니다
        </p>

        <DemoChipClosable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Chip With Icon -->
      <AppCardCode title="With Icon" :code="demoCode.withIcon">
        <p>
          칩은 Material Icons 글꼴 라이브러리에서 사용 가능한 텍스트나 아이콘을
          사용할 수 있습니다.
        </p>

        <DemoChipWithIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Avatar -->
      <AppCardCode title="With Avatar" :code="demoCode.withAvatar">
        <p>
          <code>v-avatar</code> padding을 제거하려면 <code>pill</code> prop을
          사용하세요.
        </p>

        <DemoChipWithAvatar />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Sizes -->
      <AppCardCode title="Sizes" :code="demoCode.sizes">
        <p>
          <code>x-small</code> 에서 <code>x-large</code> 까지
          <code>v-chip</code> component의 다양한 크기를 가질 수 있습니다.
        </p>

        <DemoChipSizes />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 In Selects -->
      <AppCardCode title="In Selects" :code="demoCode.inSelects">
        <p>
          <code>chips</code> Selects는 선택된 데이터를 표시하는 데 사용할 수
          있습니다 . 아래에 자신의 태그를 추가해 보세요.
        </p>

        <DemoChipInSelects />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Expandable -->
      <AppCardCode title="Expandable" :code="demoCode.expandable">
        <p>
          칩을 결합하면 <code>v-menu</code> 에 대한 특정 동작을 활성화할 수
          있습니다.
        </p>

        <DemoChipExpandable />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
