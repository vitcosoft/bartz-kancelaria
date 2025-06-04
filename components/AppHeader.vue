<template>
  <header
    class="w-full p-4
    "
  >
    <UContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <BrandLogo />
      </NuxtLink>
      <MobileNavigationMenu class="block md:hidden" />
      <DesktopNavigationMenu class="hidden md:block" />
    </UContainer>
  </header>
</template>

<script lang="ts">
</script>
