<template>
  <div class="flex justify-between items-center gap-3">
    <ULink
      v-for="social in appConfig.socials"
      :key="social.name"
      :to="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-primary"
    >
      <Icon
        :name="social.icon"
        class="w-5 h-5 flex place-content-center"
      />
    </ULink>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
