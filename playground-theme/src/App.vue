<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted, ref, watch } from "vue"

const editorRef = ref<HTMLElement>()
const code = ref<string>("<button class=\"btn btn-info\">Info</button>")

onMounted(() => {
  const editor = monaco.editor.create(editorRef.value!, {
    value: code.value,
    language: "html",
    minimap: {
      enabled: false,
    }
  })

  const handler = debounce(() => {
    code.value = editor.getValue()
  }, 1000)

  editor.onDidChangeModelContent(handler)
})

function debounce(func: Function, wait: number) {
  let timer: number
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => func(args), wait);
  }
}

watch(code, () => {
  console.log(code.value)
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="h-15 flex items-center p-3 border-b">colour-ui-playground</header>
    <main class="main flex-1 flex">
      <div ref="editorRef" class="w-full"></div>
      <div class="w-full" v-html="code"></div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<style>
@import "tailwindcss";
@import '@xionkq/colour-ui-theme';
</style>
