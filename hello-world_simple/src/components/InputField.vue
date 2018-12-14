<template>
  <div class="input-wrap">
    <label>{{name}}</label>
    <input type="text" :value="value">
  </div>
</template>

<script>
export default {
  props: ["name", "value", "pattern"],
  data() {
    return {};
  }
};
</script>
