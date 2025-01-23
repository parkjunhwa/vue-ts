<template>
  <VCard class="top-search-area">
    <VRow>
      <slot></slot>
    </VRow>
    <div v-if="openbutton" class="top-search-area-open-button-wrap">
      <VBtn
        @click="toggleExpanded"
        icon="tabler-search"
        variant="outlined"
        color="secondary"
        class="top-search-area-open-button"
      >
        <VIcon
          size="18"
          icon="tabler-chevron-down"
          :class="{ 'rotate-icon': localExpanded }"
          color="var(--color-gray-gray-600)"
        />
      </VBtn>
    </div>
  </VCard>
</template>

<script>
export default {
  props: {
    expanded: Boolean, // Optional prop, controlled inside the component
    openbutton: { type: Boolean, default: false }, // Determines default state
  },
  data() {
    return {
      localExpanded:
        this.expanded !== undefined ? this.expanded : !this.openbutton,
    };
  },
  watch: {
    expanded(newVal) {
      if (newVal !== undefined) {
        this.localExpanded = newVal;
      }
    },
    openbutton(newVal) {
      this.localExpanded = !newVal;
    },
  },
  created() {
    // Set default expanded state if 'expanded' is not provided
    if (this.expanded === undefined) {
      this.localExpanded = !this.openbutton;
    }
  },
  methods: {
    toggleExpanded() {
      this.localExpanded = !this.localExpanded;
      this.$emit("update:expanded", this.localExpanded); // Only emit if the parent listens to it
    },
  },
};
</script>

<style lang="scss" scoped>
.top-search-area {
  padding: 16px;
  border: 1px solid var(--color-gray-gray-600);
  overflow: visible;

  &:has(.top-search-area-open-button-wrap) {
    padding: 20px 20px 38px 20px;
    margin-bottom: 0px;
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
