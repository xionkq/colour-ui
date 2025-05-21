import CInput from './src/input.vue'
import type { Plugin } from 'vue'
// 引入源文件样式而不是通过打包后的tailwind插件，确保开发环境支持HMR
import '@colour-ui/theme/src/styled/input.css'

const CInputPlugin: Plugin = {
  install: (app) => {
    app.component('c-input', CInput)
  },
}

export { CInput, CInputPlugin }
