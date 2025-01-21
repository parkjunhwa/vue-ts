<script lang="ts" setup>
import * as demoCode from "@/views/demos/components/alert/demoCodeAlert";
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <DemoAlertBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>color</code> prop 은 알림의 배경 색상을 변경하는 데 사용됩니다.
        </p>

        <DemoAlertColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          The <code>icon</code> prop 을 사용하면 알림 구성 요소의 시작 부분에
          아이콘을 추가할 수 있습니다. 유형이 제공되면 기본
          <code>type</code> 아이콘이 재정의됩니다. 또한 아이콘 소품을 거짓으로
          설정하면 <code>icon</code>이 완전히 제거됩니다.
        </p>

        <DemoAlertIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Border -->
      <AppCardCode title="Border" :code="demoCode.border">
        <p>
          <code>border</code> prop 은 경고의 4면 중 하나에 간단한 테두리를
          추가합니다. <code>color</code>, <code>type</code>, <code>icon</code>과
          같은 소품과 결합하여 경고에 고유한 억양을 제공할 수 있습니다.
        </p>

        <DemoAlertBorder />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Colored Border -->
      <AppCardCode title="Colored Border" :code="demoCode.coloredBorder">
        <p>
          <code>colored-border</code> prop 은 테두리 소품에 포인트를 주기 위해
          경고 배경을 제거합니다. 유형이 설정되면 해당 유형의 기본 색상이
          사용됩니다. 색상이나 유형이 설정되지 않으면 기본 색상은 적용된 테마의
          반전된 색상(밝은 검은색, 어두운 흰색/회색)으로 바뀝니다.
        </p>

        <DemoAlertColoredBorder />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> prop 은 3단계 밀도 중 1단계.
          <code>default</code>, <code>comfortable</code>, and
          <code>compact</code> 를 기준으로 경고의 높이를 낮춥니다..
        </p>

        <DemoAlertDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Type -->
      <AppCardCode title="Type" :code="demoCode.type">
        <p>
          <code>type</code> prop 은 네 가지 기본 v-alert 스타일을 제공합니다. :
          <code>success</code>, <code>info</code>, <code>warning</code>,
          <code>error</code>. 각 스타일은 기본 아이콘과 색상을 제공합니다.
        </p>

        <DemoAlertType />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Closable  -->
      <AppCardCode title="Closable" :code="demoCode.closable">
        <p>
          <code>closable</code> prop 은 알림 구성 요소의 끝에 닫기 버튼을
          추가합니다. 이 버튼을 클릭하면 값이 거짓으로 설정되어 알림이
          효과적으로 숨겨집니다.
        </p>

        <DemoAlertClosable />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 V-model support -->
      <AppCardCode title="v-model support" :code="demoCode.vModelSupport">
        <p>
          이 버튼을 클릭하면 값이 <code>false</code> 으로 설정되어 경고가
          효과적으로 숨겨집니다. <code>v-model</code> 을 바인딩하고 true로
          설정하여 경고를 복원할 수 있습니다.
        </p>

        <DemoAlertVModelSupport />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Outlined -->
      <AppCardCode title="Outlined" :code="demoCode.outlined">
        <p>
          <code>variant="outlined"</code> prop 은 알림의 스타일을 반전시켜 현재
          적용된 색상을 상속받아 텍스트와 테두리에 적용하고 배경을 투명하게
          만듭니다.
        </p>

        <DemoAlertOutlined />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Tonal -->
      <AppCardCode title="Tonal" :code="demoCode.tonal">
        <p>
          <code>variant</code> prop 은 전체 스타일을 쉽게 변경할 수 있는 방법을
          제공합니다. 변형="톤" 소품은 제공된 색상의 불투명도 배경을 줄인 간단한
          알림 변형입니다.
        </p>

        <DemoAlertTonal />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Elevation -->
      <AppCardCode title="Elevation" :code="demoCode.elevation">
        <p>
          <code>elevation</code> prop 을 사용하여 경고할 상자 그림자를
          설정합니다.
        </p>

        <DemoAlertElevation />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Prominent -->
      <AppCardCode title="Prominent" :code="demoCode.prominent">
        <p>
          <code>prominent</code> prop 은 아이콘의 크기를 늘려 더 뚜렷한 경고를
          제공합니다.
        </p>

        <DemoAlertProminent />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
