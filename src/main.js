import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import '@/style/global.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
