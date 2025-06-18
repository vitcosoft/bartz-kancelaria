<template>
  <UNavigationMenu
    :items="items"
    :orientation="orientation"
    class="px-4 justify-content-center"
  />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps({
  orientation: {
    type: String as () => 'horizontal' | 'vertical',
    default: 'horizontal',
  },
})

const appConfig = useAppConfig()
const items = ref<NavigationMenuItem[]>(appConfig.navigation.main)
</script>
