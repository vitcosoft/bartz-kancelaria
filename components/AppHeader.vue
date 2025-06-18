<template>
  <header class="w-full p-4">
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
          v-for="social in appConfig.socials"
          :key="social.name"
          :to="social.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            :name="social.icon"
            class="w-5 h-5 flex place-content-center"
          />
        </ULink>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
