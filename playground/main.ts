import 'virtual:windi.css'
import 'highlight.js/styles/tokyo-night-dark.css'
import 'highlight.js/lib/common'
import './style/commom.css'

import { createApp } from 'vue'
import ModalHook from 'v-modal-hook'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import App from './App.vue'

import { setupNaive } from './plugins/naiveui'

const app = createApp(App)

setupNaive(app)

app.use(hljsVuePlugin)

app.use(ModalHook)

app.mount('#app')
