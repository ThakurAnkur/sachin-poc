import { createApp } from 'vue';
import './scss/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faHatWizard, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue';
import store from './store';

const vueApp = createApp(App);

library.add(faHatWizard, faAngleDown, faShoppingCart);
vueApp.component('font-awesome-icons', FontAwesomeIcon);

vueApp.use(store);


vueApp.mount('#app');
