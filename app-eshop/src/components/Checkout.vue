<template>
  <div v-if="productsInCart.length === 0">Your cart is empty</div>
  <form v-else @submit.prevent="onSumit">
    <input type="text" v-model="person.name">
    <input type="text" v-model="person.surname">
    <input type="text" v-model="person.phone">
    <button>Order</button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      person: {
        name: "",
        surname: "",
        phone: ""
      }
    };
  },
  methods: {
    onSumit() {
      console.log("person => ", this.person, "products:", this.productsInCart);
    }
  },
  computed: {
    ...mapGetters("cart", {
      productsInCart: "items"
    })
  }
};
</script>
