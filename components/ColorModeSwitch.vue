<template>
  <ClientOnly v-if="!colorMode?.forced">
    <USwitch
      v-model="isDark"
      unchecked-icon="material-symbols:light-mode-outline"
      checked-icon="material-symbols:moon-stars-outline"
      size="lg"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { USwitch } from '#components'

const colorMode = useColorMode()
const appConfig = useAppConfig()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})

watch(() => colorMode.value, (theme) => {
  if (theme === 'dark') {
    appConfig.ui.colors.primary = 'amber'
    appConfig.ui.colors.secondary = 'indigo'
  }
  else {
    appConfig.ui.colors.primary = 'blue'
    appConfig.ui.colors.secondary = 'green'
  }
}, {
  immediate: true,
})
</script>
