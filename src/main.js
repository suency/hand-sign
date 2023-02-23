import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vueEsign from 'vue-esign'
import 'amfe-flexible'
//import './assets/main.css'

const app = createApp(App)

app.use(vueEsign)
app.use(router)

app.mount('#app')
