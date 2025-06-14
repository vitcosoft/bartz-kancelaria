<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: String,
    required: true,
  },
  tooltipCopy: {
    type: String,
    required: false,
    default: 'Skopiuj do schowka',
  },
  tooltipCopied: {
    type: String,
    required: false,
    default: 'Skopiowano!',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
})

const { copy, copied } = useClipboard({
  source: props.value,
  copiedDuring: 2000,
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2.5 py-1.5 text-xs'
    case 'lg':
      return 'px-3.5 py-2.5 text-sm'
    case 'md':
    default:
      return 'px-3 py-2 text-sm'
  }
})
</script>

<template>
  <div
    class="relative inline-flex w-full items-center gap-x-2 rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2"
    :class="[
      sizeClasses,
      copied ? 'ring-primary-500 dark:ring-primary-400' : 'ring-gray-300 dark:ring-gray-700',
    ]"
  >
    <div class="flex flex-1 items-center justify-between overflow-hidden">
      <span
        v-if="props.label"
        class="opacity-75 tracking-wide"
      >{{ props.label }}</span>

      <span class="truncate font-mono tracking-wide">{{ props.value }}</span>
    </div>

    <UTooltip
      :text="copied ? props.tooltipCopied : props.tooltipCopy"
    >
      <UButton
        :icon="copied ? 'material-symbols:check-rounded' : 'material-symbols:content-copy-rounded'"
        variant="ghost"
        :padded="false"
        @click.stop="copy()"
      />
    </UTooltip>
  </div>
</template>
