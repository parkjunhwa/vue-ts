<script lang="ts" setup>
import * as demoCode from "@/views/demos/components/button/demoCodeButton";
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          The <code>color</code> prop 은 알림의 배경 색상을 변경하는 데
          사용됩니다.
        </p>
        <DemoButtonColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Outlined -->
      <AppCardCode title="Outlined" :code="demoCode.outlined">
        <p>
          <code>outlined</code> prop 은 윤곽이 그려진 버튼을 만드는 데
          사용됩니다.
        </p>
        <DemoButtonOutlined />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Flat -->
      <AppCardCode title="Flat" :code="demoCode.flat">
        <p>
          <code>flat</code> buttons 의 배경색은 그대로 유지되지만 상자 그림자는
          없습니다.
        </p>
        <DemoButtonFlat />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Rounded -->
      <AppCardCode title="Rounded" :code="demoCode.rounded">
        <p>
          prop을 사용해 <code>rounded</code> 버튼의 테두리 반경을 조절합니다.
        </p>
        <DemoButtonRounded />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Text -->
      <AppCardCode title="Text" :code="demoCode.text">
        <p>
          변형 옵션을 사용하여 <code>text</code>텍스트 버튼을 만듭니다. 텍스트
          버튼에는 상자 그림자가 없고 배경도 없습니다.
        </p>
        <DemoButtonText />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Plain -->
      <AppCardCode title="Plain" :code="demoCode.plain">
        <p>
          변형 옵션을 사용하여 <code>plain</code> 일반 버튼을 만듭니다. 일반
          버튼은 호버와 포커스에 반응하는 더 낮은 기본 불투명도를 갖습니다.
        </p>
        <DemoButtonPlain />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Tonal -->
      <AppCardCode title="Tonal" :code="demoCode.tonal">
        <p>
          변형 옵션을 사용하여 <code>tonal</code> 밝은 배경 버튼을 만듭니다.
        </p>
        <DemoButtonTonal />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Icon -->
      <AppCardCode title="Icon" :code="demoCode.icon">
        <p>버튼 내부에 아이콘을 사용하면 동작을 강조할 수 있습니다.</p>
        <DemoButtonIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Icon Only -->
      <AppCardCode title="Icon Only" :code="demoCode.iconOnly">
        <p>
          버튼 내부에 컴포넌트를 사용하여 <code>VIcon</code>테마의 나머지
          부분처럼 보이는 버튼을 만듭니다.
        </p>
        <DemoButtonIconOnly />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Sizing -->
      <AppCardCode title="Sizing" :code="demoCode.sizing">
        <p>
          버튼에는 다양한 크기 옵션을 적용해 다양한 상황에 맞게 조정할 수
          있습니다.
        </p>
        <DemoButtonSizing />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Block  -->
      <AppCardCode title="Block" :code="demoCode.block">
        <p>
          <code>block</code> prop 을 사용하면 버튼의 전체 너비를 확장할 수
          있습니다.
        </p>
        <DemoButtonBlock />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Loaders -->
      <AppCardCode title="Loaders" :code="demoCode.loaders">
        <p>
          <code>loading</code> prop 을 사용하면 사용자에게 처리가 진행 중임을
          알릴 수 있습니다. 기본 동작은
          <code>v-progress-circular</code> component 요소를 사용하는 것이지만
          이는 사용자 정의할 수 있습니다.
        </p>

        <DemoButtonLoaders />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Router -->
      <AppCardCode title="Router" :code="demoCode.router">
        <p>
          <code>to</code> prop을 사용하여 라우터를 지원하는 버튼을 만듭니다.
        </p>
        <VAlert color="warning" variant="tonal" class="mb-4">
          참고: 링크 버튼을 클릭하면 다른 페이지로 리디렉션됩니다.
        </VAlert>
        <DemoButtonRouter />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Link -->
      <AppCardCode title="Link" :code="demoCode.link">
        <p>
          구성 요소가 링크임을 지정합니다. 이는 <code>href</code>또는
          <code>to</code> prop 을 사용할 때 자동으로 적용됩니다.
        </p>
        <VAlert color="warning" variant="tonal" class="mb-4">
          참고: 링크 버튼을 클릭하면 다른 페이지로 리디렉션됩니다.
        </VAlert>
        <DemoButtonLink />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Button Group -->
      <AppCardCode title="Group" :code="demoCode.group">
        <p>
          <code>v-btn-toggle</code> component로 감싸서 그룹 버튼을 만듭니다.
          <code>divided</code> prop으로 버튼 사이에 시각적 구분선을 추가할 수
          있습니다.
        </p>
        <DemoButtonGroup />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
