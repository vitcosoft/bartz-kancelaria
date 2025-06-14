<template>
  <div>
    <address
      class="not-italic grid grid-cols-[auto_1fr] gap-x-3 gap-y-4 items-center"
      :class="addressClasses"
    >
      <Icon
        name="material-symbols:home-work-rounded"
        class="size-8 self-start"
      />
      <div>
        <p>Kancelaria&nbsp;Radcy&nbsp;Prawnego Justyna&nbsp;Bartz</p>
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
        :size="chipSize"
      />

      <CopyableChip
        label="REGON"
        value="141443283"
        class="col-span-2"
        :size="chipSize"
      />
    </address>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const addressClasses = computed(() => {
  switch (props.size) {
    case 'xs': return 'text-xs'
    case 'sm': return 'text-sm'
    case 'lg': return 'text-lg'
    case 'xl': return 'text-xl'
    case 'md':
    default:
      return 'text-base'
  }
})

const chipSize = computed(() => {
  switch (props.size) {
    case 'xs':
    case 'sm':
      return 'sm'
    case 'lg':
    case 'xl':
      return 'lg'
    case 'md':
    default:
      return 'md'
  }
})
</script>
