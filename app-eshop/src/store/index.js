import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';

export const store = new Vuex.Store({
  modules: {
    cart,
    menu,
    products
  },
  strict: true
});
