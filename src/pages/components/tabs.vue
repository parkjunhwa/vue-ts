<script setup lang="ts">
import * as demoCode from "@/views/demos/components/tabs/demoCodeTabs";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" variant="outlined" :code="demoCode.basic">
        <p>
          <code>v-tabs</code> component 는 선택 가능한 항목 뒤에 콘텐츠를 숨기는
          데 사용됩니다.
        </p>

        <DemoTabsBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Stacked -->
      <AppCardCode title="Stacked" variant="outlined" :code="demoCode.stacked">
        <p>
          <code>stacked</code> prop을 사용하면 아이콘과 텍스트를 모두 사용할 수
          있는 버튼을 만들 수 있습니다.
        </p>

        <DemoTabsStacked />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Vertical -->
      <AppCardCode
        title="Vertical"
        variant="outlined"
        :code="demoCode.vertical"
      >
        <p>
          <code>vertical</code> prop 를 사용하면 <code>v-tab</code> components를
          수직으로 쌓을 수 있습니다.
        </p>

        <DemoTabsVertical />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Alignment -->
      <AppCardCode
        title="Alignment"
        variant="outlined"
        :code="demoCode.alignment"
      >
        <p><code>align-tabs</code> prop을 사용하여 탭 정렬을 변경합니다.</p>

        <DemoTabsAlignment />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Pagination -->
      <AppCardCode
        title="Pagination"
        variant="outlined"
        :code="demoCode.pagination"
      >
        <p>
          탭 항목이 컨테이너를 넘치면 데스크톱에 페이지네이션 컨트롤이
          표시됩니다.
        </p>

        <DemoTabsPagination />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Custom Icons -->
      <AppCardCode
        title="Custom Icons"
        variant="outlined"
        :code="demoCode.customIcons"
      >
        <p>
          <code>prev-icon</code> 과과 <code>next-icon</code> props을 사용하여
          사용자 지정 페이지 아이콘을 적용할 수 있습니다.
        </p>

        <DemoTabsCustomIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Fixed tabs -->
      <AppCardCode title="Fixed" variant="outlined" :code="demoCode.fixed">
        <p>
          <code>fixed-tabs</code> prop 은 <code>v-tab</code>이 최대
          너비(300px)까지 모든 사용 가능한 공간을 차지하도록 합니다.
        </p>

        <DemoTabsFixed />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Grow -->
      <AppCardCode title="Grow" variant="outlined" :code="demoCode.grow">
        <p>
          <code>grow</code> 은 탭 항목들이 제한 없이 모든 사용 가능한 공간을
          차지하게 할 것입니다.
        </p>

        <DemoTabsGrow />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Programmatic Navigation -->
      <AppCardCode
        title="Programmatic Navigation"
        variant="outlined"
        :code="demoCode.programmaticNavigation"
      >
        <DemoTabsProgrammaticNavigation />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Dynamic Tabs -->
      <AppCardCode title="Dynamic" variant="outlined" :code="demoCode.dynamic">
        <p>
          탭을 동적으로 추가하거나 제거할 수 있습니다. 이렇게 하면 원하는 숫자로
          업데이트할 수 있으며 <code>v-tabs</code> 구성 요소가 반응합니다.
        </p>

        <DemoTabsDynamic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Basic Pill -->
      <AppCardCode
        title="Basic Pill"
        variant="outlined"
        :code="demoCode.basicPill"
      >
        <p>
          custom class <code>.v-tabs-pill</code>과
          <code>v-tabs</code> component를 사용하여 알약 탭을 스타일링하세요.
        </p>

        <DemoTabsBasicPill />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Vertical Pill -->
      <AppCardCode
        title="Vertical Pill"
        variant="outlined"
        :code="demoCode.verticalPill"
      >
        <p>
          맞춤형 클래스 .v-tabs-필과 v-tabs 구성 요소를 사용하여 수직 탭을
          스타일링하세요.
        </p>

        <DemoTabsVerticalPill />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
