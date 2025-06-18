<template>
  <div>
    <address
      class="not-italic grid grid-cols-[auto_1fr] gap-4 items-center"
      :class="addressClasses"
    >
      <Icon
        name="material-symbols:home-work-rounded"
        class="size-7 self-start"
      />
      <div>
        <p>{{ appConfig.contact.name }}</p>
        <p>{{ appConfig.contact.address.street }}</p>
        <p>{{ appConfig.contact.address.zip }} {{ appConfig.contact.address.city }}</p>
      </div>

      <Icon
        name="material-symbols:id-card-rounded"
        class="size-7 self-start"
      />
      <div>
        <p>NIP: {{ appConfig.contact.nip }}</p>
        <p>REGON: {{ appConfig.contact.regon }}</p>
      </div>

      <Icon
        name="material-symbols:phone-in-talk-rounded"
        class="size-7"
      />
      <ULink :href="`tel:${appConfig.contact.phone.replace(/\s/g, '')}`">
        {{ appConfig.contact.phone }}
      </ULink>

      <Icon
        name="material-symbols:alternate-email-rounded"
        class="size-7"
      />
      <ULink :href="`mailto:${appConfig.contact.email}`">
        {{ appConfig.contact.email }}
      </ULink>
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

const appConfig = useAppConfig()
</script>
