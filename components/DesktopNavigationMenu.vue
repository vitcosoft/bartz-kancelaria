<template>
  <UNavigationMenu
    :items="items"
    orientation="horizontal"
    class="px-4 justify-content-center"
  />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>(getNavgationItems())
</script>
