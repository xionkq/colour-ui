<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import Button from "../../button/src/button.vue";

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error'
  size?: 'lg' | 'sm'
  round?: boolean
  disabled?: boolean
  icon?: string
  iconPlacement?: 'left' | 'right'
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: undefined,
  size: undefined,
  round: false,
  disabled: false,
  icon: undefined,
  iconPlacement: 'left',
})

const typeClass = computed(() => {
  return props.type ? `input-${props.type}` : ''
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
  <label class="input" :class="[typeClass, sizeClass, roundClass, disabledClass]">
    <input type="text" :placeholder="placeholder" :disabled="disabled" />
  </label>
</template>
