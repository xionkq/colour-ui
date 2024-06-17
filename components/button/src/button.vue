<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div>
    <button class="btn">Button</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>
  </div>
  <div style="margin-top: 10px">
    <button class="btn btn-outline">Button</button>
    <button class="btn btn-outline btn-info">Info</button>
    <button class="btn btn-outline btn-success">Success</button>
    <button class="btn btn-outline btn-warning">Warning</button>
    <button class="btn btn-outline btn-error">Error</button>
  </div>
  <div style="margin-top: 10px">
    <button class="btn btn-lg">Large</button>
    <button class="btn">Medium</button>
    <button class="btn btn-sm">Small</button>
    <button class="btn btn-xs">Tiny</button>
  </div>
  <div style="margin-top: 10px">
    <button class="btn btn-circle btn-lg"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-sm"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-xs"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-info"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-success"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-warning"><Icon icon="tdesign:search" /></button>
    <button class="btn btn-circle btn-error"><Icon icon="tdesign:search" /></button>
  </div>
  <div style="margin-top: 10px">
    <button class="btn"><Icon icon="tdesign:search" /></button>
    <button class="btn"><Icon icon="tdesign:search" />Search</button>
    <button class="btn">Search<Icon icon="tdesign:search" /></button>
  </div>
</template>
