<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

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
})

const { copy, copied } = useClipboard({
  source: props.value,
  copiedDuring: 2000,
})
</script>

<template>
  <div
    class="relative inline-flex w-full items-center gap-x-2 rounded-md px-3 py-2 text-base shadow-sm ring-1 ring-inset focus-within:ring-2"
    :class="copied ? 'ring-primary-500 dark:ring-primary-400' : 'ring-[var(--ui-border-accented)]'"
  >
    <div class="flex flex-1 items-center justify-between overflow-hidden">
      <span
        v-if="props.label"
        class="opacity-75 tracking-wide"
      >{{ props.label }}</span>

      <span class="truncate font-mono tracking-wide">{{ props.value }}</span>
    </div>

    <UTooltip :text="copied ? props.tooltipCopied : props.tooltipCopy">
      <UButton
        :icon="copied ? 'i-mdi-check' : 'i-mdi-content-copy'"
        variant="ghost"
        :padded="false"
        @click.stop="copy()"
      />
    </UTooltip>
  </div>
</template>
