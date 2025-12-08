<script setup lang="ts">
import * as monaco from 'monaco-editor'
import {onMounted, ref} from "vue";

const el = ref<HTMLElement>();

onMounted(() => {
  monaco.editor.create(el.value!, {
    value: "console.log('hello world')",
    language: "typescript",
    dimension: {
      height: 800,
      width: 800,
    },
  });
});
</script>

<template>
  <h1 ref="el">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
