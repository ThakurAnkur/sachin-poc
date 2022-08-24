import { createStore } from 'vuex';
import cart from './cart';
const store = createStore({
    modules: {
        cart
    }
})

export default store;
