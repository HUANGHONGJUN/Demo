import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import definedirective from './directive/lazydirective'

import directives from './directive/scrollload.js'
import { createPinia } from 'pinia'

import watchlocalStorage from '../src/utils/watchlocalStorage.js'


import router from './router'

import App from './App.vue'
const app = createApp(App)



app.use(router) 
app.use(ElementPlus)
app.use(createPinia())
app.use(watchlocalStorage)
app.use(directives)
// app.use(definedirective)
app.mount('#app')