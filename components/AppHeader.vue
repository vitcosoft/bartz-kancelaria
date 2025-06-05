<template>
  <header
    class="w-full p-4
    "
  >
    <UContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <BrandLogo />
      </NuxtLink>
      <div class="flex md:hidden justify-between items-center gap-3">
        <ColorModeSwitch />
        <MobileNavigationMenu />
      </div>
      <DesktopNavigationMenu class="hidden md:block" />
      <div class="hidden md:flex justify-between items-center gap-3">
        <ColorModeSwitch />
        <ULink
          target="_blank"
          to="https://www.facebook.com/?locale=pl_PL"
          rel="noopener noreferrer"
        >
          <Icon
            name="fa6-brands:square-facebook"
            class="w-5 h-5 flex place-content-center"
          />
        </ULink>
        <ULink
          target="_blank"
          to="https://www.google.com"
          rel="noopener noreferrer"
        >
          <Icon
            name="fa6-brands:google"
            class="w-5 h-5 flex place-content-center"
          />
        </ULink>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
</script>
