export default {
  namespaced: true,
  state: { items: getProducts() },
  getters: {
    items(state) {
      return state.items;
    },
    item: (state, getters) => () => {
      // return getters.itemsMap[id];
      console.log('--CHECKING: --', 'state: ', state, 'getters: ', getters);
      return {};
    }
  },
  mutations: {},
  actions: {}
};

function getProducts() {
  return [
    {
      id_product: 10,
      title: 'Iphone 5',
      price: 20000
    },
    {
      id_product: 20,
      title: 'Iphone 6',
      price: 25000
    },
    {
      id_product: 30,
      title: 'Iphone 7',
      price: 30000
    }
  ];
}
