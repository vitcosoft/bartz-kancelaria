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
      <div class="hidden md:flex justify-between items-center gap-3">
        <ULink
          target="_blank"
          to="https://www.facebook.com/?locale=pl_PL"
        >
          <Icon
            name="fa6-brands:square-facebook"
            class="w-5 h-5 flex place-content-center"
          />
        </ULink>
        <ULink
          target="_blank"
          to="https://www.google.com"
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

<script lang="ts">
</script>
