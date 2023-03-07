import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Vue.use(BootstrapVue)

const app = createApp(App)
app.use(BootstrapVue3)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.mount('#app')
