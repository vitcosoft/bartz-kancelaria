<template>
  <USlideover
    title="Menu główne"
    close-icon="material-symbols:close-rounded"
    side="top"
  >
    <UButton
      icon="material-symbols:menu-rounded"
      size="xl"
      variant="ghost"
      class="w-8 h-8 flex place-content-center"
    />
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="px-4 justify-content-center"
      />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>(getNavigationItems())
</script>
