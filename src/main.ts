import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { lineLogin } from '@/modules/LineLogin'
import { lineLoginData } from '@/data/LineLoginData'

// デバッグ時はコメントアウトを外す
// import VConsole from 'vconsole';
// const vConsole = new VConsole();

createApp(App).use(router).mount('#app')

await lineLogin(lineLoginData.value)