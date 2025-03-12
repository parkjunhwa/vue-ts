export const basic = {
  ts: `<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="날자 선택"
  />
</template>
`,
  js: `<script setup>
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="날자 선택"
  />
</template>
`,
}

export const basic2 = {
  ts: `실제코드 참조
<template>
  <AppDateTimePicker
    v-model="date"
    label="날짜 선택"
    clearable
    clear-icon="tabler-x"
    append-inner-icon="tabler-calendar"
    :config="{ dateFormat: 'Y.m.d', allowInput: true }"
  />
</template>`,
  js: ``,
}

export const dateAndTime = {
  ts: `<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="날자, 시간 선택"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,
  js: `<script setup>
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="날자, 시간 선택"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,
}

export const disabledRange = {
  ts: `<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="날자 선택"
    :config="{ dateFormat: 'Y.m.d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,
  js: `<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="날자 선택"
    :config="{ dateFormat: 'Y.m.d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,
}

export const moon = {
  ts: `<script setup lang="ts">
const moon = ref("");
// 입력 값 초기화 함수
const onClear = () => {
  moon.value = "";
};
</script>

<template>
  <AppMoonPicker
    v-model="dateRange"
    placeholder="해당 월 선택"
    prefix="월선택"
    prepend-inner-icon="tabler-calendar-event"
    clearable
    @keydown.esc="onClear"
  />
  <AppMoonPicker
    v-model="dateRange"
    placeholder="날자 선택"
    prefix="조회기간"
    prepend-inner-icon="tabler-calendar-event"
    clearable
    range
    @keydown.esc="onClear"
  />
</template>

`,
  js: `
`,
}

export const humanFriendly = {
  ts: `<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="날자 선택"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,
  js: `<script setup>
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="날자 선택"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,
}

export const inline = {
  ts: `<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="날자 선택"
    :config="{ inline: true }"
  />
</template>
`,
  js: `<script setup>
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="날자 선택"
    :config="{ inline: true }"
  />
</template>
`,
}

export const multipleDates = {
  ts: `<script setup lang="ts">
const multipleDate = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="날자 선택"
    :config="{ mode: 'multiple', dateFormat: 'Y.m.d' }"
  />
</template>
`,
  js: `<script setup>
const multipleDate = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="날자 선택"
    :config="{ mode: 'multiple', dateFormat: 'Y.m.d' }"
  />
</template>
`,
}

export const range = {
  ts: `<script setup lang="ts">
const dateRange = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="날자 선택"
    :config="{ mode: 'range' }"
  />
</template>
`,
  js: `<script setup>
const dateRange = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="날자 선택"
    :config="{ mode: 'range' }"
  />
</template>
`,
}

export const timePicker = {
  ts: `<script setup lang="ts">
const time = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="시간 선택"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,
  js: `<script setup>
const time = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="시간 선택"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,
}
