import CButton from './src/button.vue'
import type { Plugin } from 'vue'
import "./src/style"

const CButtonPlugin: Plugin = {
  install: (app) => {
    app.component('c-button', CButton)
  }
}

export default CButtonPlugin
