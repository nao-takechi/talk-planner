import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { lineLoginData } from '@/data/LineLoginData'
import { lineLogin } from '@/modules/LineLogin'

// デバッグ時はコメントアウトを外す
// import VConsole from 'vconsole';
// const vConsole = new VConsole();

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')

loadFonts()
await lineLogin(lineLoginData.value)