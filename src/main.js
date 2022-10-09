import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import '../src/styles/normalize.css'
import '../src/styles/_abstract.scss'

createApp(App).use(store).mount('#app')

// .use(router).
