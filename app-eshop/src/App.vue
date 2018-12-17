<template>
  <div id="app">
    <div class="main-wrapper">
      <Header :headerTitle="'My Custom Header'" :productsInCart="appCartLength"></Header>
      <div class="main-content">
        <nav class="nav">
          <router-link
            v-for="(item, index) in menuList"
            :key="index"
            :to="item.url"
            tags="li"
            class="router-original"
            active-class="router-active"
          >
            <span>-->> {{item.text}}</span>
          </router-link>
        </nav>
        <main class="content">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header
  },
  computed: {
    ...mapGetters("products", {
      productsAll: "items"
    }),
    ...mapGetters("menu", {
      menuList: "items"
    }),
    ...mapGetters("cart", {
      appCartLength: "itemsLength"
    })
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
.item-card {
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px dashed grey;
}
.main-content {
  display: flex;
}
.nav {
  min-width: 200px;
}
.main-container {
  min-width: 500px;
}

.router-original {
  color: black;
  display: flex;
  flex-direction: row;
  height: 30px;
}
.products-wrapper {
  display: flex;
}
.router-active {
  background-color: grey;
  color: #fff;
}
</style>
