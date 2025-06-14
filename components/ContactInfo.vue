<template>
  <address
    class="not-italic grid grid-cols-[auto_1fr] gap-x-3 gap-y-4 items-center text-lg"
  >
    <Icon
      name="material-symbols:home-work-rounded"
      class="size-8 self-start"
    />
    <div>
      <p>Kancelaria&nbsp;Radcy&nbsp;Prawnego <span>Justyna&nbsp;Bartz</span></p>
      <p>ul. Przykładowa 12/3</p>
      <p>09-410 Płock</p>
    </div>

    <Icon
      name="material-symbols:phone-in-talk-rounded"
      class="size-8"
    />
    <ULink href="tel:+48606686864">
      +48 606 686 864
    </ULink>

    <Icon
      name="material-symbols:alternate-email-rounded"
      class="size-8"
    />
    <ULink href="mailto:poczta@bartz-kancelaria.pl">
      poczta@bartz-kancelaria.pl
    </ULink>

    <CopyableChip
      label="NIP"
      value="7741343151"
      class="col-span-2"
    />

    <CopyableChip
      label="REGON"
      value="141443283"
      class="col-span-2"
    />
  </address>
</template>

<script setup lang="ts">
</script>
