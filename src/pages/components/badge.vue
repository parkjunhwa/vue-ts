<script lang="ts" setup>
import * as demoCode from "@/views/demos/components/badge/demoCodeBadge";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Style -->
      <AppCardCode title="Style" :code="demoCode.style">
        <p>
          <code>bordered</code>, <code>dot</code>, <code>inline</code>,
          <code>rounded</code> 등 다양한 소품을 사용하여 배지를 스타일링할 수
          있습니다.
        </p>

        <DemoBadgeStyle />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Color -->
      <AppCardCode title="Color" :code="demoCode.color">
        <p>
          <code>color</code> prop 을 사용하여여 다양한 배경 배지를 사용하여
          소품을 사용하세요.
        </p>

        <DemoBadgeColor />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Position -->
      <AppCardCode title="Position" :code="demoCode.position">
        <p>
          prop을 사용하여 <code>location</code> prop의 위치를 ​​변경할 수
          있습니다. 가능한 값은 <code>top-end</code>, <code>bottom-end</code>,
          <code>bottom-start</code>, <code>top-start</code>.
        </p>

        <DemoBadgePosition />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icon -->
      <AppCardCode title="Icon" :code="demoCode.icon">
        <p>
          <code>icon</code> prop 또는 use를 사용하여 <code>slot</code>아이콘을
          렌더링할 수 있습니다.
        </p>

        <DemoBadgeIcon />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Avatar Status -->
      <AppCardCode title="Avatar Status" :code="demoCode.avatarStatus">
        <p>아바타를 상태로 배지를 사용할 수 있습니다.</p>

        <DemoBadgeAvatarStatus />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Dynamic notifications -->
      <AppCardCode
        title="Dynamic notifications"
        :code="demoCode.dynamicNotifications"
      >
        <p>동적 콘텐츠에 배지를 통합하여 알림 시스템 등을 만들 수 있습니다.</p>

        <DemoBadgeDynamicNotifications />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Show on hover -->
      <AppCardCode title="Show on hover" :code="demoCode.showOnHover">
        <p>
          가시성 제어를 통해 다양한 작업을 수행할 수 있습니다. 예를 들어,
          마우스를 올리면 배지를 표시할 수 있습니다.
        </p>

        <DemoBadgeShowOnHover />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Tabs -->
      <AppCardCode title="Tabs" :code="demoCode.tabs">
        <p>
          배지는 다양한 방법으로 사용자에게 정보를 전달하는 데 도움이 됩니다.
        </p>

        <DemoBadgeTabs />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Maximum value content -->
      <AppCardCode title="Maximum Value" :code="demoCode.maximumValue">
        <p>
          <code>max</code> prop 을 사용하여 max배지 콘텐츠의 값을 제한합니다.
        </p>

        <DemoBadgeMaximumValue />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Tonal Badge -->
      <AppCardCode title="Tonal" :code="demoCode.tonal">
        <p>
          <code>v-badge--tonal</code> 톤 배지를 사용하려면 클래스를 사용하세요.
        </p>

        <DemoBadgeTonal />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
