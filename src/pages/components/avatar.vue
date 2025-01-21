<script lang="ts" setup>
import * as demoCode from "@/views/demos/components/avatar/demoCodeAvatar";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p><code>color</code> prop 은 아바타의 배경 색상을 변경하는 소품.</p>

        <DemoAvatarColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Initials -->
      <AppCardCode title="Tonal" :code="demoCode.tonal">
        <p>
          <code>variant="tonal"</code> 을 사용하여 밝은 배경 아바타를 만듭니다.
        </p>

        <DemoAvatarTonal />
      </AppCardCode>
    </VCol>

    <VCol md="6" cols="12">
      <!-- 👉 Sizes -->
      <AppCardCode title="Sizes" :code="demoCode.sizes">
        <p>
          <code>size</code> prop 을 사용하면 아바타의 높이와 너비를 변경할 수
          있습니다.
        </p>

        <DemoAvatarSizes />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Icons -->
      <AppCardCode title="Icons" :code="demoCode.icons">
        <p>
          <code>v-avatar</code> 구성 요소의 <code>icon</code> prop 을 사용하여
          아이콘을 렌더링할 수 있습니다.
        </p>

        <DemoAvatarIcons />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Rounded -->
      <AppCardCode title="Rounded" :code="demoCode.rounded">
        <p>
          <code>rounded</code> prop 은 <code>v-avatar</code>의 경계 반경을
          변경하는 데 사용할 수 있습니다.
        </p>

        <DemoAvatarRounded />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Images -->
      <AppCardCode title="Images" :code="demoCode.images">
        <p>
          <code>image</code> prop은 <code>v-avatar</code>의 구성 요소의 이미지
          소품을 사용하여 이미지를 렌더링할 수 있습니다.
        </p>

        <DemoAvatarImages />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Group -->
      <AppCardCode title="Group" :code="demoCode.group">
        <p>
          <code>v-avatar-group</code> 그룹 클래스를 아바타 wrapper 로
          사용합니다.
        </p>

        <DemoAvatarGroup />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
