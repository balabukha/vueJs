<template>
  <div>
    <div
      v-if="productsInCart.length !== 0"
      v-for="(itemInCart) in productsInCart"
      :key="itemInCart.id_product"
    >
      product: {{itemInCart.title}}
      price: {{itemInCart.price}} rub.
      <button
        @click="onRemoveFromCart(itemInCart.id_product)"
      >delete from cart</button>
    </div>
    <div v-else>Your cart is empty</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      itemsInCart: "items"
    }),
    ...mapGetters("products", {
      allProducts: "items"
    }),
    productsInCart() {
      return this.allProducts.filter(item => {
        return this.itemsInCart.indexOf(item.id_product) !== -1;
      });
    }
  },
  methods: {
    ...mapActions("cart", {
      onRemoveFromCart: "onRemove"
    })
  }
};
</script>
