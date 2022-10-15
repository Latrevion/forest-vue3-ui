import "./lib/forest.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import  '../src/lib/icon.js'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
