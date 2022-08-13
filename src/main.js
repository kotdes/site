import { createApp } from 'vue'
import App from './App.vue'
import PhosphorVue from "phosphor-vue";
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(PhosphorVue)
app.use(router)

app.mount('#app')
