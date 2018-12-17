<template>
  <div>
    <h4>{{headerTitle}}</h4>
    <div>products in cart: {{productsInCart}}</div>
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
