import 'virtual:windi.css'
import { createApp } from 'vue'
import ModalHook from 'v-modal-hook'
import App from './App.vue'
import { setupNaive } from './plugins/naiveui'

const app = createApp(App)

setupNaive(app)

app.use(ModalHook)

app.mount('#app')
