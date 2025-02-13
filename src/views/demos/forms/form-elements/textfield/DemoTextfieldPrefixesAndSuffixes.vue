<script setup lang="ts">
const amount = ref(10.05);
const weight = ref(28.02);
const email = ref("example");
const time = ref("04:56");
const dateValue = ref(new Date().toISOString().split("T")[0]);
</script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="시간입력"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="dateValue"
        type="date"
        label="날자입력"
        placeholder="YYYY-MM-DD"
      />
    </VCol>
  </VRow>
</template>
