<template>
  <UContainer class="flex flex-col gap-12 py-12 min-h-[calc(100vh-2rem)]">
    <h1 class="text-3xl font-bold text-center">
      Formularz kontaktowy
    </h1>

    <div class="flex-grow flex justify-center items-center">
      <div class="w-full md:max-w-2xl lg:max-w-none lg:w-auto flex flex-col lg:grid lg:grid-cols-[auto_auto_auto] gap-12">
        <div class="flex items-start justify-center">
          <ContactInfo />
        </div>

        <USeparator
          orientation="vertical"
          class="hidden lg:block"
        />

        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UFormField
              label="Imię"
              size="lg"
            >
              <UInput
                class="w-full"
                placeholder="Jan"
              />
            </UFormField>

            <UFormField
              label="Nazwisko"
              hint="Opcjonalne"
              size="lg"
            >
              <UInput
                class="w-full"
                placeholder="Kowalski"
              />
            </UFormField>
          </div>

          <UFormField
            label="Email"
            size="lg"
          >
            <UInput
              class="w-full"
              placeholder="jan.k@przyklad.com"
            />
          </UFormField>

          <UFormField
            label="Numer telefonu"
            hint="Opcjonalne"
            size="lg"
          >
            <UInput
              class="w-full"
              placeholder="123456789"
            />
          </UFormField>

          <UFormField
            label="Wiadomość"
            size="lg"
          >
            <UTextarea class="w-full resize-y" />
          </UFormField>

          <div class="flex justify-center lg:justify-end mt-3">
            <UButton
              type="submit"
              size="xl"
              class="w-2/3 md:w-2/5"
              block
            >
              Wyślij
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
</script>
