import { createStore } from 'vuex';
import cart from './cart';
import product from './product';
const store = createStore({
    modules: {
        cart,
        product
    }
})

export default store;
