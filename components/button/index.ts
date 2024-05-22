import CButton from './button.vue'
import type { Plugin } from 'vue'

const CButtonPlugin: Plugin = {
  install: (app) => {
    app.component('c-button', CButton)
  }
}

export default CButtonPlugin