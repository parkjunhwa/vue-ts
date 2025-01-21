<script setup lang="ts">
import * as demoCode from "@/views/demos/components/list/demoCodeList";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" no-padding :code="demoCode.basic">
        <VCardText
          ><code>v-list</code> 구성 요소에는 아바타, 콘텐츠, 동작 등이 포함될 수
          있습니다.</VCardText
        >

        <VCardText>
          <DemoListBasic />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Rounded -->
      <AppCardCode title="Rounded" no-padding :code="demoCode.rounded">
        <VCardText
          ><code>rounded</code> prop을 사용하여 <code>v-list-item</code> 을
          둥글게 만들 수 있습니다.
        </VCardText>

        <VCardText>
          <DemoListRounded />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density  -->
      <AppCardCode title="Density" :code="demoCode.density" no-padding>
        <VCardText>
          <code>density</code> prop은 컴포넌트 내 간격을 조정합니다. 사용 가능한
          옵션은 다음과 같습니다. <code>default</code>,
          <code>comfortable</code>, <code>compact</code>.</VCardText
        >

        <VCardText>
          <DemoListDensity />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Nav -->
      <AppCardCode title="Nav" no-padding :code="demoCode.nav">
        <VCardText>
          <code>nav</code> 목록은 목록은 <code>v-list-item</code> 항목이
          차지하는 너비를 줄이고 border radius을 추가하는 스타일을 받을 수
          있습니다.
        </VCardText>

        <VCardText>
          <DemoListNav />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Action and item group -->
      <AppCardCode
        title="Action and item group"
        no-padding
        :code="demoCode.actionAndItemGroup"
      >
        <VCardText>
          액션이 있는 목록 <code>three-line</code>입니다.
          <code>v-list-group</code>를 활용하여 액션을 쉽게 연결하세요.
        </VCardText>

        <VCardText>
          <DemoListActionAndItemGroup />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Sub Group -->
      <AppCardCode title="Sub Group" no-padding :code="demoCode.subGroup">
        <VCardText>
          <code>v-list-group</code> component를 사용하면 하위 그룹 속성을 사용해
          최대 2단계 깊이까지 만들 수 있습니다.
        </VCardText>

        <VCardText>
          <DemoListSubGroup />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Two lines and Subheader -->
      <AppCardCode
        title="Two lines and subheader"
        no-padding
        :code="demoCode.twoLinesAndSubheader"
      >
        <VCardText
          >목록에는 하위 헤더, 구분자가 포함될 수 있으며 1개 이상의 줄이 포함될
          수 있습니다. 자막은 한 줄을 넘어가면 줄임표로 표시.</VCardText
        >

        <VCardText>
          <DemoListTwoLinesAndSubheader />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Three Line -->
      <AppCardCode title="Three Line" no-padding :code="demoCode.threeLine">
        <VCardText
          >3줄 목록의 경우 자막은 2줄에서 수직으로 고정되고 그 다음에는
          생략됩니다. 이 기능은 line-clamp를 사용하며 모든 브라우저에서 지원되지
          않습니다.</VCardText
        >

        <VCardText>
          <DemoListThreeLine />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Users List -->
      <AppCardCode title="User List" no-padding :code="demoCode.userList">
        <VCardText>
          <DemoListUserList />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Progress List -->
      <AppCardCode
        title="Progress List"
        no-padding
        :code="demoCode.progressList"
      >
        <VCardText>
          <DemoListProgressList />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Shaped -->
      <AppCardCode title="Shaped" no-padding :code="demoCode.shaped">
        <VCardText>
          한쪽면만 둥글게 처리할 때
          <code>v-list-item</code>.
        </VCardText>

        <VCardText>
          <DemoListShaped />
        </VCardText>
      </AppCardCode>
    </VCol>
  </VRow>
</template>
