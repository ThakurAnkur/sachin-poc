import { start } from 'repl';
import { ActionContext } from 'vuex';
import { fetchWrapper } from '../utils/fetchWrapper';

const defaultState = ()=>({
    cartDetails: {cartAmount: 1000, items: [],},
    
})
const state = defaultState();

const getters = {
    getCartItemCount(state: any) {
        return state.cartDetails.items.length;
    },
    getCartItems(state:any) {
        return state.cartDetails.items;
    },
    getCartBalance(state:any) {
        return state.cartDetails.cartAmount;
    },
    estimatedCartCost(state:any) {
        let cost = 0;
        state.cartDetails.items.forEach((item: any)=>{
            const currentItemCost: number = item.price * item.quantity;
            cost = cost + currentItemCost;
        })
        return cost;
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
    },
    removeCartItem(state: any, payload:cartItem) {
        const index = state.cartDetails.items.findIndex((current: cartItem) =>current.name === payload.name);
        if(index !== -1) {
            state.cartDetails.items.splice(index, 1);
        }
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
    },
    async removeItem(context: ActionContext<any, any>, payload: cartItem) {
        try {
            context.commit('removeCartItem', payload);
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
