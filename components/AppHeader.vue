<template>
  <header class="w-full p-4">
    <UContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <BrandLogo />
      </NuxtLink>
      <div class="flex md:hidden justify-between items-center gap-3 ">
        <ColorModeSwitch />
        <SocialLinks />
        <MobileNavigationMenu class="work-in-progress" />
      </div>
      <div class="work-in-progress">
        <DesktopNavigationMenu class="hidden md:block" />
      </div>
      <div class="hidden md:flex justify-between items-center gap-3">
        <ColorModeSwitch />
        <SocialLinks />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
</script>
