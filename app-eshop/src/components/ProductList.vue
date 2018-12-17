<template>
  <div>
    <main class="content">
      <!-- <h4>main</h4> -->
      <div class="products-wrapper">
        <div v-for="(item) in productsAll" :key="item.id_product" class="item-card">
          <router-link :to="'/products' + '/' + item.id_product " tag="h4">
            <a>{{item.title}}</a>
          </router-link>
          <h5>Price: {{item.price}}</h5>
          <button
            v-if="appCart.indexOf(item.id_product) === -1"
            @click="onAddToCart(item.id_product)"
          >Add to Cart</button>
          <button v-else @click="onRemoveFromCart(item.id_product)">Remove from Cart</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("cart", {
      onAddToCart: "onAdd",
      onRemoveFromCart: "onRemove"
    })
  },
  computed: {
    ...mapGetters("products", {
      productsAll: "items"
    }),
    ...mapGetters("cart", {
      appCart: "items"
    })
  }
};
</script>
