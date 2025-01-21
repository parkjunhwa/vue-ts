export const basic = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      Good Morning! Start your day with some alerts.
    </VAlert>
    <VAlert
      title="Alert Title"
      type="error"
      closable
      text="Alert Text"
    />
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      Good Morning! Start your day with some alerts.
    </VAlert>
    <VAlert
      title="Alert Title"
      type="error"
      closable
      text="Alert Text"
    />
  </div>
</template>
`,
}

export const border = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`,
}

export const closable = {
  ts: `<script lang="ts" setup>
const isAlertVisible = ref(true)
</script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`,
  js: `<script setup>
const isAlertVisible = ref(true)
</script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`,
}

export const coloredBorder = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
}

export const colors = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`,
}

export const density = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`,
}

export const elevation = {
  ts: `<script lang="ts" setup>
const alertShadow = ref(5)
</script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
    class="mb-2"
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>
</template>
`,
  js: `<script setup>
const alertShadow = ref(5)
</script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
    class="mb-2"
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    안녕하세요! 오늘의 알림입니다.
  </VAlert>
</template>
`,
}

export const icons = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="tabler-egg-cracked"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      color="primary"
      icon="tabler-device-desktop-analytics"
      variant="tonal"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      color="primary"
      icon="tabler-brand-vue"
      variant="outlined"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="tabler-egg-cracked"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      color="primary"
      icon="tabler-device-desktop-analytics"
      variant="tonal"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      color="primary"
      icon="tabler-brand-vue"
      variant="outlined"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
}

export const outlined = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
}

export const prominent = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        안녕하세요! 오늘의 알림입니다.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-school"
      prominent
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      icon="tabler-shield-lock"
      prominent
      type="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        안녕하세요! 오늘의 알림입니다.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-school"
      prominent
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>

    <VAlert
      icon="tabler-shield-lock"
      prominent
      type="warning"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>
</template>
`,
}

export const tonal = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`,
}

export const type = {
  ts: `<template>
  <div class="demo-space-y">
    <VAlert type="info">
      안녕하세요! <strong>오늘의 알림</strong>입니다.info
    </VAlert>

    <VAlert type="success">
      안녕하세요! <strong>오늘의 알림</strong>입니다.success
    </VAlert>

    <VAlert type="warning">
      안녕하세요! <strong>오늘의 알림</strong>입니다.warning
    </VAlert>

    <VAlert type="error">
      안녕하세요! <strong>오늘의 알림</strong>입니다.error
    </VAlert>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-y">
    <VAlert type="info">
      안녕하세요! <strong>오늘의 알림</strong>입니다.info
    </VAlert>

    <VAlert type="success">
      안녕하세요! <strong>오늘의 알림</strong>입니다.success
    </VAlert>

    <VAlert type="warning">
      안녕하세요! <strong>오늘의 알림</strong>입니다.warning
    </VAlert>

    <VAlert type="error">
      안녕하세요! <strong>오늘의 알림</strong>입니다.error
    </VAlert>
  </div>
</template>
`,
}

export const vModelSupport = {
  ts: `<script lang="ts" setup>
const isAlertVisible = ref(true)
</script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "알림 숨기기" : "알림 보이기" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
`,
  js: `<script setup>
const isAlertVisible = ref(true)
</script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      안녕하세요! 오늘의 알림입니다.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "알림 숨기기" : "알림 보이기" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
`,
}
