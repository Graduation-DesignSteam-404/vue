import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)

import axios from 'axios'

app.use(axios)
app.mount('#app')
