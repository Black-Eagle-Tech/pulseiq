import { createApp } from 'vue'

import { createPinia } from 'pinia'

import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'

import router from './router'

import './index.css'

import { useThemeStore } from '@/stores/themeStore'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

app.use(router)

app.use(MotionPlugin)

app.use(Toast, {
  transition: 'Vue-Toastification__fade',

  maxToasts: 4,

  newestOnTop: true,

  hideProgressBar: true,

  timeout: 2500,
})

const themeStore = useThemeStore()

themeStore.initializeTheme()

app.mount('#app')