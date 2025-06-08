<template>
  <footer class="py-6 text-sm">
    <UContainer>
      <div class="flex flex-col md:flex-row gap-6 p-6 md:p-0">
        <div class="md:flex-1">
          <h3 class="text-md font-semibold mb-4">
            Na skróty
          </h3>
          <div
            class="flex flex-col space-y-2"
          >
            <ULink to="localhost:3000">Skrót 1</ULink>
            <ULink to="localhost:3000">Skrót 2</ULink>
            <ULink to="localhost:3000">Skrót 3</ULink>
            <ULink to="localhost:3000">Skrót 4</ULink>
            <ULink to="localhost:3000">Skrót 5</ULink>
          </div>
        </div>
        <div class="md:flex-1">
          <h3 class="text-md font-semibold mb-4">
            Wsparcie
          </h3>
          <div class="flex flex-col space-y-2">
            <ULink to="localhost:3000">FAQ</ULink>
            <ULink to="localhost:3000">Kontakt</ULink>
            <ULink to="localhost:3000">Regulamin</ULink>
            <ULink to="localhost:3000">Inny regulamin</ULink>
            <ULink to="localhost:3000">Polityka prywatności</ULink>
          </div>
        </div>
        <div class="md:flex-1">
          <address class="not-italic">
            <p>Kancelaria Radcy Prawnego Justyna Bartz</p>
            <p>ul. Przykładowa 123</p>
            <p>00-000 Płock, Polska</p>
            <p>NIP: 7741343151</p>
            <p>REGON: 141443283</p>
            <p class="mt-2">
              <ULink
                href="tel:+48606686864"
              >tel: +48 606 686 864</ULink>
            </p>
            <p>
              <ULink
                href="mailto:poczta@bartz-kancelaria.pl"
              >poczta@bartz-kancelaria.pl</ULink>
            </p>
          </address>
        </div>
      </div>
    </UContainer>
    <USeparator class="my-5 w-full" />
    <p class="mt-4 text-center text-xs">
      &copy; {{ currentYear }} Kancelaria Radcy Prawnego Justyna Bartz.
    </p>
    <p class="text-center text-xs">
      Wszelkie prawa zastrzeżone.
    </p>
  </footer>
</template>

<script setup lang="ts">
const now = new Date()
const currentYear = ref(now.getFullYear())
</script>
