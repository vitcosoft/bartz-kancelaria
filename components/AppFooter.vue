<template>
  <footer class="py-6 text-base">
    <UContainer>
      <div class="flex flex-col md:flex-row gap-6 p-6 md:p-0">
        <div class="md:flex-1">
          <h3 class="text-md font-semibold mb-4">
            Na skróty
          </h3>
          <div class="flex flex-col space-y-2">
            <ULink
              v-for="link in appConfig.navigation.shortcuts"
              :key="link.to"
              :to="link.to"
            >
              {{ link.label }}
            </ULink>
          </div>
        </div>
        <div class="md:flex-1">
          <h3 class="text-md font-semibold mb-4">
            Wsparcie
          </h3>
          <div class="flex flex-col space-y-2">
            <ULink
              v-for="link in appConfig.navigation.support"
              :key="link.to"
              :to="link.to"
            >
              {{ link.label }}
            </ULink>
          </div>
        </div>
        <div class="md:flex-1">
          <ContactInfo
            class="hidden md:block"
            size="sm"
          />
          <ContactInfo
            class="block md:hidden"
            size="md"
          />
        </div>
      </div>
    </UContainer>
    <USeparator class="my-5 w-full" />
    <p class="mt-4 text-center text-xs">
      &copy; {{ currentYear }} {{ appConfig.contact.name }}.
    </p>
    <p class="text-center text-xs">
      Wszelkie prawa zastrzeżone.
    </p>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const currentYear = new Date().getFullYear()
</script>
