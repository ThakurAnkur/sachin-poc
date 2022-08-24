import { createApp } from 'vue';
import './scss/style.scss';
import App from './App.vue';
import store from './store';


const vueApp = createApp(App);
vueApp.use(store);
vueApp.mount('#app');
