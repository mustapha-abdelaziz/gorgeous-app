<template>
  <div class="header">
    <a href="#"><h1>Gorgeous</h1></a>
    <div class="container">
      <a href="#" @click.prevent="openPanel">
        <span class="circle ">{{ cart.qty }} </span>
        <span class="shop-bag material-icons">
          local_mall
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["cart"]),
  },
  methods: {
    openPanel() {
      this.$store.dispatch("openPanel");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap");

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}
.header {
  position: fixed;
  width: 100vw;
  padding: 1rem 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  border-bottom: 1px solid #d9d9d9;
  background-color: white;
}

.header h1 {
  font-family: "DM Serif Display";
  text-decoration: none;
  color: black;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  height: 35px;
  width: 35px;
  position: relative;
}

.container a {
  color: black;
}

.container a:hover {
  color: rgb(48, 48, 48);
}

.circle {
  background-color: red;
  position: absolute;
  font-size: 10px;
  color: white;
  top: 0;
  right: 0;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  text-align: center;
  z-index: 1;
}
.shop-bag {
  font-size: 34px;
  z-index: 0;
  position: relative;
}
</style>
