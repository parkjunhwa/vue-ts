<template>
  <VCard class="top-search-area">
    <VRow>
      <slot></slot>
    </VRow>
    <div class="top-search-area-open-button-wrap">
      <VBtn
        @click="$emit('update:expanded', !expanded)"
        icon="tabler-search"
        variant="outlined"
        color="secondary"
        class="top-search-area-open-button"
        ><VIcon
          size="18"
          icon="tabler-chevron-down"
          :class="{ 'rotate-icon': expanded }"
          color="var(--color-gray-gray-600)"
        />
      </VBtn>
    </div>
  </VCard>
</template>

<script>
export default {
  props: {
    expanded: Boolean, // Receive the expanded state from parent
  },
};
</script>

<style lang="scss" scoped>
.top-search-area {
  padding: 16px;
  border: 1px solid var(--color-gray-gray-600);
  overflow: visible;

  &:has(.top-search-area-open-button-wrap) {
    padding: 16px 16px 34px 16px;
  }

  .top-search-area-open-button-wrap {
    position: absolute;
    bottom: -19px;
    left: 50%;
    transform: translateX(-50%);

    .top-search-area-open-button {
      width: 38px;
      height: 38px;
      background: #ffffff;
      color: var(--color-gray-gray-600);
      box-shadow: 0 3px 12px
          rgba(var(--v-shadow-key-umbra-color), var(--v-shadow-md-opacity)),
        0 0 transparent, 0 0 transparent;
      --v-hover-opacity: 1;
      opacity: 1;

      .rotate-icon {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
      }

      .v-icon {
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
