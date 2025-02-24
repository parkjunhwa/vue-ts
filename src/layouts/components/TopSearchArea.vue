<template>
  <VCard class="top-search-area">
    <VRow>
      <slot></slot>
    </VRow>
    <div v-if="openbutton" class="top-search-area-open-button-wrap">
      <VBtn
        @click="toggleExpanded"
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
  },
  data() {
    return {
      openbutton: window.innerWidth <= 960, // Default based on screen size
      localExpanded:
        this.expanded !== undefined ? this.expanded : window.innerWidth > 960,
    };
  },
  watch: {
    expanded(newVal) {
      if (newVal !== undefined) {
        this.localExpanded = newVal;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.openbutton = window.innerWidth <= 960;
      if (!this.openbutton) {
        this.localExpanded = true;
      }
    },
    toggleExpanded() {
      this.localExpanded = !this.localExpanded;
      this.$emit("update:expanded", this.localExpanded);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-search-area {
  padding: 24px;
  border: 1px solid var(--color-gray-gray-600);
  overflow: visible;

  &:has(.top-search-area-open-button-wrap) {
    padding: 24px 24px 38px 24px;
    margin-bottom: 0px;
  }

  .top-search-area-open-button-wrap {
    position: absolute;
    bottom: -19px;
    left: 50%;
    transform: translateX(-50%);

    .top-search-area-open-button {
      width: 38px !important;
      min-width: 38px !important;
      height: 38px !important;
      padding: 0;
      border-radius: 19px;
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
@media (min-width: 961px) {
  .top-search-area-open-button-wrap {
    display: none;
  }
}
@media (max-width: 960px) {
  .top-search-area-open-button-wrap {
    display: inherit;
  }
}
</style>
