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
      <NavigationMenu orientation="vertical" />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
</script>
