export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items(state) {
      return state.items;
    },
    itemsLength(state) {
      return state.items.length;
    }
  },
  mutations: {
    onAdd(state, id_product) {
      if (state.items.indexOf(id_product) === -1) {
        state.items.push(id_product);
      }
    },
    onRemove(state, id_product) {
      const posNumber = state.items.indexOf(id_product);
      if (state.items && posNumber !== -1) {
        state.items.splice(posNumber, 1);
      }
    }
  },
  actions: {
    onAdd(store, id_product) {
      store.commit('onAdd', id_product);
    },
    onRemove(store, id_product) {
      store.commit('onRemove', id_product);
    }
  }
};
