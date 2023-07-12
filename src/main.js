import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)

import element from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(element)
app.use(router)
app.mount('#app')
