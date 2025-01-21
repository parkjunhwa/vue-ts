<script setup lang="ts">
import * as demoCode from "@/views/demos/forms/form-elements/rating/demoCodeRating";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic">
        <p>
          <code>v-rating</code> 컴포넌트는 사용자 피드백을 수집하기 위한 간단한
          인터페이스를 제공합니다.
        </p>
        <DemoRatingBasic />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Density -->
      <AppCardCode title="Density" :code="demoCode.density">
        <p>
          <code>density</code> 속성을 사용하여 <code>v-rating</code> 항목이
          차지하는 공간을 조절할 수 있습니다.
        </p>
        <DemoRatingDensity />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Colors -->
      <AppCardCode title="Colors" :code="demoCode.colors">
        <p>
          <code>v-rating</code> 컴포넌트의 색상을 원하는 대로 변경할 수 있으며,
          선택된 색상과 선택되지 않은 색상을 각각 설정할 수 있습니다.
        </p>
        <DemoRatingColors />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Size -->
      <AppCardCode title="Size" :code="demoCode.size">
        <p>
          <code>v-icon</code>에서 제공하는 크기 클래스를 그대로 사용하거나
          <code>size</code> 속성을 사용하여 직접 크기를 지정할 수 있습니다.
        </p>
        <DemoRatingSize />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Length -->
      <AppCardCode title="Length" :code="demoCode.length">
        <p>
          <code>length</code> 속성을 수정하여 항목의 개수를 변경할 수 있습니다.
        </p>
        <DemoRatingLength />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Clearable -->
      <AppCardCode title="Clearable" :code="demoCode.clearable">
        <p>
          <code>clearable</code> 속성을 사용하면 컴포넌트를 초기화할 수
          있습니다. 현재 값이 설정된 아이콘을 클릭하면 초기화됩니다.
        </p>
        <DemoRatingClearable />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Readonly -->
      <AppCardCode title="Readonly" :code="demoCode.readonly">
        <p>
          사용자가 변경할 수 없는 평점을 표시하려면 <code>readonly</code> 속성을
          사용할 수 있습니다.
        </p>
        <DemoRatingReadonly />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Hover -->
      <AppCardCode title="Hover" :code="demoCode.hover">
        <p>아이콘 위에 마우스를 올리면 시각적인 피드백을 제공합니다.</p>
        <DemoRatingHover />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Incremented -->
      <AppCardCode title="Incremented" :code="demoCode.incremented">
        <p>
          <code>half-increments</code> 속성을 사용하면 평점의 정밀도를 높여 0.5
          단위로 설정할 수 있습니다.
        </p>
        <DemoRatingIncremented />
      </AppCardCode>
    </VCol>

    <VCol cols="12" md="6">
      <!-- 👉 Item slot -->
      <AppCardCode title="Item slot" :code="demoCode.itemSlot">
        <p>
          슬롯을 사용하면 보다 고급 맞춤 설정이 가능하며, 평점을 표시하는 방식을
          자유롭게 조정할 수 있습니다.
        </p>
        <DemoRatingItemSlot />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
