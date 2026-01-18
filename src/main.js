import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css' // 引入 tailwind 样式

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
