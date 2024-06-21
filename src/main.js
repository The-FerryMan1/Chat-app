import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { init } from './firebase/db'
import App from './App.vue'
import router from './router'



init;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
