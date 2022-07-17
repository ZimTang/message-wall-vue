import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'normalize.css';
import './assets/styles/indes.css'

const app = createApp(App);

app.use(router).mount('#app');
