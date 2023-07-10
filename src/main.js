import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)

import element from 'element-plus'
import 'element-plus/dist/index.css'

app.use(element)
app.mount('#app')
