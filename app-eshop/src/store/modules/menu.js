export default {
  namespaced: true,
  state: {
    items: [
      {
        url: '/products',
        text: 'Products list'
      },
      {
        url: '/cart',
        text: 'Cart'
      },
      {
        url: '/checkout',
        text: 'Order Now'
      }
    ]
  },
  getters: {
    items(state) {
      return state.items;
    }
  }
};
