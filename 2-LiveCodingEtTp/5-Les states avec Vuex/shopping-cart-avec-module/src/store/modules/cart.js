import shop from '../../api/shop';

// state
const state = () => ({
    items: [],
    checkoutStatus: null
});

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id);
            return {
                title: product.title,
                price: product.price,
                imgUrl: product.imgUrl,
                quantity
            };
        });
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }
};

// actions
const actions = {
    checkout({ commit, state }, products) {
        const savedCardItems = [...state.items];
        commit("setCheckoutStatus", null);
        // Vider Panier
        commit("setCartItems", { items: [] });
        shop.buyProducts(
            products,
            () => commit("setCheckoutStatus", "successfull"),
            () => {
                commit("setCheckoutStatus", "failed");
                // Retour au panier sauvé avant l'envoie de la requetes
                commit("setCartItems", { items: savedCardItems });
            }
        );
    },

    addProductToCart({ state, commit }, product) {
        commit("setCheckoutStatus", null);
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id);
            if (!cartItem) {
                commit("pushProductToCart", { id: product.id });
            } else {
                commit("incrementItemQuantity", cartItem);
            }
            commit(
                "products/decrementProductInventory",
                { id: product.id },
                { root: true }
            );
        }
    }
};

// mutations
const mutations = {
    pushProductToCart(state, {id}){
        state.items.push({
            id,
            quantity:1
        });
    },

    incrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++;
    },

    setCartItems(state, {items}) {
        state.items = items;
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
