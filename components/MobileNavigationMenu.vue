<template>
  <USlideover
    title="Menu główne"
    close-icon="fa6-solid:xmark"
    side="top"
  >
    <UButton
      icon="fa6-solid:bars"
      size="xl"
      variant="ghost"
      class="w-8 h-8 flex place-content-center"
      @click="toggleMobileMenu"
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

const items = ref<NavigationMenuItem[]>(getNavgationItems())

const open = ref(false)

function toggleMobileMenu(): void {
  open.value = !open.value
}
</script>
