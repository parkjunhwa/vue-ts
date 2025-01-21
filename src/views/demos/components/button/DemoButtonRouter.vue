<template>
  <div class="demo-space-x">
    <VBtn to="alert"> 문자열 Literal </VBtn>

    <VBtn color="warning" :to="{ path: 'alert' }"> 오브젝트 Path </VBtn>

    <VBtn color="success" :to="{ name: 'components-alert' }">
      Named Router
    </VBtn>

    <VBtn color="secondary" :to="{ path: 'alert', query: { plan: 'private' } }">
      With Query
    </VBtn>
  </div>
</template>
