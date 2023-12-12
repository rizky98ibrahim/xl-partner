import './assets/css/styles.scss';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import Dependencies
import { tns } from "tiny-slider/src/tiny-slider"
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import feather from 'feather-icons';
feather.replace();

const app = createApp(App)
app.use(router)
app.mount('#app')