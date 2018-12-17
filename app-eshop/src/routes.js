import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductList.vue';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';
import E404 from './components/E404.vue';

const routes = [
  {
    path: '',
    redirect: { name: 'products' }
  },
  {
    name: 'products',
    path: '/products',
    component: ProductList
  },
  {
    name: 'productById',
    path: '/products/:id',
    component: Product
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: '404',
    path: '/*',
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});
