import { ActionContext } from 'vuex';
import { fetchWrapper } from '../utils/fetchWrapper';
import { cartItem } from './cart';

const defaultState = ()=>({
   products: [],
    
})
const state = defaultState();

const getters = {
    getProducts (state: any){
        return state.products;
    },
};

const mutations = {
    updateState(state: any, payload: any) {
        state.products = payload;
    },
    addProductItem(state: any, payload:cartItem) {
        state.products.push(payload);
    }
}

const actions = {
    async fetchProducts({commit}: any) {
        try {
            const {send} = fetchWrapper('public/product.json');
            const response = await send();
            const json = await response.json();
            commit('updateState', json)
        } catch (ex) {
            console.error(ex);
        }
    },
    async addItem(context: ActionContext<any, any>, payload: cartItem) {
        try {
            context.commit('addProductItem', payload);
        } catch (ex) {
            console.error(ex);
        }
    }
}
export default {
    name: 'product',
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
