import { createApp } from 'vue'
import App from './App.vue'
import { setupNaive } from './plugins/naiveui'
import 'virtual:windi.css'

const app = createApp(App)

setupNaive(app)

app.mount('#app')
