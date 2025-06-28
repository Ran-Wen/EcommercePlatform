import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入懒加载插件
import { lazyPlugin } from './directives'
import { componentPlugin } from './components'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
//注册持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

