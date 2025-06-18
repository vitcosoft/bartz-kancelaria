<template>
  <UApp class="font-sans bg-muted">
    <AppHeader />
    <USeparator class="my-1 w-full" />
    <NuxtPage />
    <USeparator class="my-1 w-full" />
    <AppFooter />
  </UApp>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const appConfig = useAppConfig()

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
