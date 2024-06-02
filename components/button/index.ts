import CButton from './src/button.vue'
import type { Plugin } from 'vue'
// 引入源文件样式而不是通过打包后的tailwind插件，确保开发环境支持HMR
import '@colour-ui/theme/src/styled/button.css'

const CButtonPlugin: Plugin = {
  install: (app) => {
    app.component('c-button', CButton)
  },
}

export default CButtonPlugin
