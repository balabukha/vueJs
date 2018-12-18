import Vue from 'vue';
import App from './App.vue';

import { router } from './routes.js';
import { store } from './store/';

Vue.config.productionTip = false;
// router.beforeResolve((to, from, next) => {
//   console.log('--beforeResolve: --', store.getters['cart/items'].length);
//   if (store.getters['cart/items'].length === 0) {
//     // next();
//   } else {
//     next();
//   }
// });
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
