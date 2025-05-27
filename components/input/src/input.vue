<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

interface Props {
  status?: 'info' | 'success' | 'warning' | 'error'
  size?: 'lg' | 'sm'
  round?: boolean
  disabled?: boolean
  iconPlacement?: 'left' | 'right'
  placeholder?: string
  suffixIcon?: string
  prefixIcon?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: undefined,
  size: undefined,
  round: false,
  disabled: false,
  iconPlacement: 'left',
  placeholder: 'Type here',
  suffixIcon: undefined,
  prefixIcon: undefined,
  type: 'text',
})

const statusClass = computed(() => {
  return props.status ? `input-${props.status}` : ''
})

const sizeClass = computed(() => {
  return props.size ? `input-${props.size}` : ''
})

const roundClass = computed(() => {
  return props.round ? `input-round` : ''
})

const disabledClass = computed(() => {
  return props.disabled ? `input-disabled` : ''
})
</script>

<template>
  <label class="input" :class="[statusClass, sizeClass, roundClass, disabledClass]">
    <span v-if="$slots.prefix || prefixIcon">
      <slot name="prefix">
        <Icon v-if="prefixIcon" :icon="prefixIcon" />
      </slot>
    </span>
    <input :type="type" :placeholder="placeholder" :disabled="disabled" />
    <span v-if="$slots.suffix || suffixIcon">
      <slot name="suffix">
        <Icon v-if="suffixIcon" :icon="suffixIcon" />
      </slot>
    </span>
  </label>
</template>
