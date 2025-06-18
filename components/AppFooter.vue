<template>
  <footer class="py-6 text-base">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-0">
        <div class="work-in-progress">
          <h3 class="text-md font-semibold mb-4">
            Na skróty
          </h3>
          <div class="flex flex-col space-y-2">
            <ULink
              v-for="link in appConfig.navigation.shortcuts"
              :key="link.to"
              :to="link.to"
              class="hover:text-primary"
            >
              {{ link.label }}
            </ULink>
          </div>
        </div>

        <div class="work-in-progress">
          <h3 class="text-md font-semibold mb-4">
            Wsparcie
          </h3>
          <div class="flex flex-col space-y-2">
            <ULink
              v-for="link in appConfig.navigation.support"
              :key="link.to"
              :to="link.to"
              class="hover:text-primary"
            >
              {{ link.label }}
            </ULink>
            <ULink
              to="/kontakt"
              class="hover:text-primary"
            >
              Kontakt
            </ULink>
          </div>
        </div>

        <div class="md:col-start-2">
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
