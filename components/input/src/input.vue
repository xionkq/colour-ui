<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

// interface Props {
//   type?: 'info' | 'success' | 'warning' | 'error'
//   size?: 'lg' | 'sm' | 'xs'
//   outline?: boolean
//   circle?: boolean
//   disabled?: boolean
//   icon?: string
//   iconPlacement?: 'left' | 'right'
// }
//
// const props = withDefaults(defineProps<Props>(), {
//   type: undefined,
//   size: undefined,
//   outline: false,
//   circle: false,
//   disabled: false,
//   icon: undefined,
//   iconPlacement: 'left',
// })
//
// const typeClass = computed(() => {
//   return props.type ? `btn-${props.type}` : ''
// })
//
// const sizeClass = computed(() => {
//   return props.size ? `btn-${props.size}` : ''
// })
//
// const outlineClass = computed(() => {
//   return props.outline ? `btn-outline` : ''
// })
//
// const circleClass = computed(() => {
//   return props.circle ? `btn-circle` : ''
// })
//
// const disabledClass = computed(() => {
//   return props.disabled ? `btn-disabled` : ''
// })
</script>

<template>
  <input type="text" placeholder="Type here" class="input" />
</template>
