import { useLayoutConfigStore } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'
import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'

// SECTION Store
export const useConfigStore = defineStore('config', () => {
  // 👉 Force Theme to 'light'
  const theme = ref('light')

  // 👉 isVerticalNavSemiDark
  const isVerticalNavSemiDark = ref(themeConfig.verticalNav.isVerticalNavSemiDark)

  // 👉 skin
  const skin = ref(themeConfig.app.skin)

  // ℹ️ We need to use `storeToRefs` to forward the state
  const {
    isLessThanOverlayNavBreakpoint,
    appContentWidth,
    navbarType,
    isNavbarBlurEnabled,
    appContentLayoutNav,
    isVerticalNavCollapsed,
    footerType,
    isAppRTL,
  } = storeToRefs(useLayoutConfigStore())

  return {
    theme,
    isVerticalNavSemiDark,
    skin,

    // @layouts exports
    isLessThanOverlayNavBreakpoint,
    appContentWidth,
    navbarType,
    isNavbarBlurEnabled,
    appContentLayoutNav,
    isVerticalNavCollapsed,
    footerType,
    isAppRTL,
  }
})
// !SECTION

// SECTION Init
export const initConfigStore = () => {
  const vuetifyTheme = useTheme()
  const configStore = useConfigStore()

  // Force theme to 'light'
  watch(
    () => configStore.theme,
    () => {
      vuetifyTheme.global.name.value = 'light'
    },
    { immediate: true }
  )

  onMounted(() => {
    vuetifyTheme.global.name.value = 'light'
  })
}
// !SECTION
