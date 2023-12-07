import { createApp } from 'vue'
import './assets/css/fontawesome.css'
import './style.css'
import './global'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Mounted AOS Init
app.use(router)
app.mount('#app')