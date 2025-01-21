<script setup lang="ts">
import * as demoCode from "@/views/demos/components/dialog/demoCodeDialog";
</script>

<template>
  <VRow>
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          대화상자에는 활성화 프로그램용 슬롯과 콘텐츠용 슬롯(기본값) 두 개가
          있습니다.
        </p>

        <DemoDialogBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Persistent -->
      <AppCardCode title="Persistent" :code="demoCode.persistent">
        <p><code>persistent</code> prop 은 지속적인 대화상자을 만듭니다.</p>

        <DemoDialogPersistent />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Scrollable -->
      <AppCardCode title="Scrollable" :code="demoCode.scrollable">
        <p>
          <code>scrollable</code> prop 은 대화상자 내에 스크롤을 생성합니다.
        </p>

        <DemoDialogScrollable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Loader -->
      <AppCardCode title="Loader" :code="demoCode.loader">
        <p>
          <code>v-dialog</code> component를 사용하면 애플리케이션에 맞는 맞춤형
          로딩 환경을 쉽게 만들 수 있습니다.
        </p>

        <DemoDialogLoader />
      </AppCardCode>
    </VCol>

    <VCol col="12" md="6">
      <!-- 👉 Nesting -->
      <AppCardCode title="Nesting" :code="demoCode.nesting">
        <p>
          대화 상자는 중첩될 수 있습니다. 즉, 한 대화 상자에서 다른 대화 상자를
          열 수 있습니다.
        </p>

        <DemoDialogNesting />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Overflowed -->
      <AppCardCode title="Overflowed" :code="demoCode.overflowed">
        <p>사용 가능한 창 공간에 맞지 않는 모달은 컨테이너를 스크롤합니다.</p>

        <DemoDialogOverflowed />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Fullscreen -->
      <AppCardCode title="Fullscreen" :code="demoCode.fullscreen">
        <p>
          제한된 공간으로 인해, 전체 화면 대화 상자는 큰 화면을 가진 기기에서
          사용되는 대화 상자보다 모바일 기기에 더 적합할 수 있습니다.
        </p>

        <DemoDialogFullscreen />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Form -->
      <AppCardCode title="Form" :code="demoCode.form">
        <p>대화상자의 간단한 양식 예입니다.</p>

        <DemoDialogForm />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
