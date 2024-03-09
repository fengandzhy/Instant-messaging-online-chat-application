import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const elementApp = createApp(App)
elementApp.use(router)
elementApp.mount('#app')
