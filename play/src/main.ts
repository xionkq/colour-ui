import { createApp } from 'vue'
import App from './App.vue'
import colour from '@colour-ui/components'
import "../dev-css/index.css"

createApp(App).use(colour).mount('#play')
