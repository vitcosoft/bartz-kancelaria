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
        <p>{{ appConfig.contact.name }}</p>
        <p>{{ appConfig.contact.address.street }}</p>
        <p>{{ appConfig.contact.address.zip }} {{ appConfig.contact.address.city }}</p>
      </div>

      <Icon
        name="material-symbols:phone-in-talk-rounded"
        class="size-8"
      />
      <ULink :href="`tel:${appConfig.contact.phone.replace(/\s/g, '')}`">
        {{ appConfig.contact.phone }}
      </ULink>

      <Icon
        name="material-symbols:alternate-email-rounded"
        class="size-8"
      />
      <ULink :href="`mailto:${appConfig.contact.email}`">
        {{ appConfig.contact.email }}
      </ULink>

      <CopyableChip
        label="NIP"
        :value="appConfig.contact.nip"
        class="col-span-2"
        :size="chipSize"
      />

      <CopyableChip
        label="REGON"
        :value="appConfig.contact.regon"
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

const appConfig = useAppConfig()
</script>
