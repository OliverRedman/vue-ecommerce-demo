import { createStore } from "vuex";
import products from "./products.js";

export default createStore({
  namespaced: true,
  modules: {
    products,
  },
  state: {
    itemsInCart: [],
  },
  mutations: {
    addToCart(_, payload) {
      this.state.itemsInCart.push(payload);
    },
    buyItems() {
      this.state.itemsInCart = [];
    },
    removeItem(_, payload) {
      let index = this.state.itemsInCart.indexOf(payload);
      this.state.itemsInCart.splice(index, 1);
    },
  },
});
