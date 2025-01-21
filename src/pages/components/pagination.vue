<script setup lang="ts">
import * as demoCode from "@/views/demos/components/pagination/demoCodePagination";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-pagination</code> component 는 긴 데이터 세트를 분리하는 데
          사용됩니다.
        </p>

        <DemoPaginationBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 outline basic variant -->
      <AppCardCode title="Outline" :code="demoCode.outline">
        <p>
          <code>variant='outline'</code> prop은 페이지네이션 항목의 개요를
          설명하는 데 사용됩니다.
        </p>

        <DemoPaginationOutline />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Circle -->
      <AppCardCode title="Circle" :code="demoCode.circle">
        <p>
          <code>rounded</code> prop 을 사용하면 페이지네이션 버튼을 다른
          스타일로 렌더링할 수 있습니다.
        </p>

        <DemoPaginationCircle />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 outline circle variant -->
      <AppCardCode title="Outline Circle" :code="demoCode.outlineCircle">
        <p>
          <code>variant='outline'</code> 은 페이지네이션 항목에 둥근 윤곽을
          제공하는 데 사용됩니다.
        </p>

        <DemoPaginationOutlineCircle />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Disabled -->
      <AppCardCode title="Disabled" :code="demoCode.disabled">
        <p>
          Pagination 항목은 <code>disabled</code> prop을 사용하여 수동으로
          비활성화할 수 있습니다.
        </p>

        <DemoPaginationDisabled />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          이전 및 다음 페이지 아이콘은 <code>prev-icon</code> 과과
          <code>next-icon</code> props.으로 사용자 지정할 수 있습니다.
        </p>

        <DemoPaginationIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Length -->
      <AppCardCode title="Length" :code="demoCode.length">
        <p>
          <code>length</code> prop을 사용하여 <code>v-pagination</code>길이를
          설정할 수 있으며, 페이지 버튼의 수가 상위 컨테이너를 초과하면 목록이
          잘립니다.
        </p>

        <DemoPaginationLength />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Total visible -->
      <AppCardCode title="Total visible" :code="demoCode.totalVisible">
        <p>
          <code>total-visible</code> prop을 사용하여 보이는 페이지 버튼의 최대
          수를 수동으로 설정할 수도 있습니다.
        </p>

        <DemoPaginationTotalVisible />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Color -->
      <AppCardCode title="Color" :code="demoCode.color">
        <p>
          <code>active-color</code> prop 을 사용하여 다양한 색상의 페이지를
          만듭니다.
        </p>

        <DemoPaginationColor />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Size -->
      <AppCardCode title="Size" :code="demoCode.size">
        <p>
          <code>size</code> 을 사용하여 구성 요소의 높이와 너비를 설정합니다.
          기본 단위는 px입니다. 또한 다음과 같은 미리 정의된 크기를 사용할 수
          있습니다. : <strong>x-small</strong>, <strong>small</strong>,
          <strong>default</strong>, <strong>large</strong>,
          <strong>x-large</strong>.
        </p>

        <DemoPaginationSize />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
