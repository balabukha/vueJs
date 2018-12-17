<template>
  <div>
    <div v-for="(itemInCart) in itemsInCart" :key="itemInCart">{{itemInCart}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      itemsInCart: "items"
    }),
    ...mapGetters("products", {
      allProducts: "items"
    })
  }
};
</script>
