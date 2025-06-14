<template>
  <UContainer
    class="my-8 flex flex-col gap-12"
  >
    <!--
      The main heading for the contact section.
    -->
    <h1 class="text-3xl font-bold">
      Skontaktuj się z nami!
    </h1>

    <!--
      Container for the contact information component.
    -->
    <div>
      <ContactInfo />
    </div>

    <!--
      Container for the form fields.
      The gap has been increased from 4 to 6 for more vertical space
      between form fields.
    -->
    <div class="flex flex-col gap-6">
      <UFormField label="Imię">
        <!-- The w-full class ensures the input takes up the full width of its container. -->
        <UInput
          class="w-full"
          placeholder="Jan"
        />
      </UFormField>

      <UFormField
        label="Nazwisko"
        hint="Opcjonalne"
      >
        <!-- The w-full class ensures the input takes up the full width of its container. -->
        <UInput
          class="w-full"
          placeholder="Kowalski"
        />
      </UFormField>

      <UFormField
        label="Email"
      >
        <!-- The w-full class ensures the input takes up the full width of its container. -->
        <UInput
          class="w-full"
          placeholder="jan.k@przyklad.com"
        />
      </UFormField>

      <UFormField
        label="Numer telefonu"
        hint="Opcjonalne"
      >
        <!-- The w-full class ensures the input takes up the full width of its container. -->
        <UInput
          class="w-full"
          placeholder="123456789"
        />
      </UFormField>

      <UFormField
        label="Wiadomość"
      >
        <!--
          The w-full class ensures the textarea takes up the full width.
          The resize-y class allows vertical resizing but prevents horizontal resizing,
          which helps maintain the layout.
        -->
        <UTextarea class="w-full resize-y" />
      </UFormField>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// No script changes are needed for this layout fix.
</script>
