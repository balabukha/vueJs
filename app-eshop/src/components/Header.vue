<template>
  <div>
    <h4>{{headerTitle}}</h4>
    <div v-if="productsInCart !== 0">products in cart: {{productsInCart}}</div>
    <div v-else>Your cart is Empty</div>
  </div>
</template>
<script>
export default {
  props: ["productsInCart", "headerTitle"]
  //   data() {
  //     return {
  //       productsInCart: 0
  //     };
  //   }
};
</script>
