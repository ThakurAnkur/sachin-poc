import { ActionContext } from 'vuex';
import { fetchWrapper } from '../utils/fetchWrapper';

const defaultState = ()=>({
    cartDetails: {cartAmount: 1000, items: [],},
    
})
const state = defaultState();

const getters = {
    getCartItemCount(state: any) {
        return state.cartDetails.items.length;
    }
};

export type cartItem = {name: String,
    price: Number,
    quantity: Number,}

const mutations = {
    updateState(state: any, payload: any) {
        state.cartDetails = payload;
    },
    addCartItem(state: any, payload:cartItem) {
        state.cartDetails.items.push(payload);
    }
}

const actions = {
    async initCart({commit}: any) {
        try {
            const {send} = fetchWrapper('public/cart.json');
            const response = await send();
            const json = await response.json();
            commit('updateState', json)
        } catch (ex) {
            console.error(ex);
        }
    },
    async addItem(context: ActionContext<any, any>, payload: cartItem) {
        try {
            context.commit('addCartItem', payload);
        } catch (ex) {
            console.error(ex);
        }
    }
}
export default {
    name: 'cart',
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
