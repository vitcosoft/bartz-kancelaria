<template>
  <UContainer
    class="my-8 flex flex-col gap-12"
  >
    <h1 class="text-3xl font-bold">
      Skontaktuj się z nami!
    </h1>

    <div>
      <ContactInfo />
    </div>

    <USeparator />

    <div class="flex flex-col gap-6">
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
    </div>

    <div class="flex justify-center">
      <UButton
        type="submit"
        size="xl"
        class="w-2/3 md:w-1/3"
        block
      >
        Wyślij
      </UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
</script>
