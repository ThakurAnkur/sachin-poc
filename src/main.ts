import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import store from './store';


const vueApp = createApp(App);
vueApp.use(store);
vueApp.mount('#app');
