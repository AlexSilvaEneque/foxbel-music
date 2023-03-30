import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import fontawesome from './utils/fontawesome'


createApp(App)
    .use(createPinia())
    .component(fontawesome[0], fontawesome[1])
    .mount('#app')
