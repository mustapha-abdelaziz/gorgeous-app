<template>
  <the-header></the-header>
  <div id="container">
    <carousel class="carousel" title="SHOP OUR FEATURED PRODUCTS">
      <base-card v-for="item in products" :key="item.id" :product="item">
      </base-card>
    </carousel>
    <carousel class="carousel" title="Skin Care">
      <base-card v-for="item in products" :key="item.id" :product="item">
      </base-card>
    </carousel>
    <base-panel></base-panel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "./components/UI/Carousel.vue";
import BasePanel from "./components/UI/BasePanel.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    Carousel,
    BasePanel,
    TheHeader,
  },
  computed: {
    ...mapGetters("prods", ["products"]),
  },

  methods: {},
  mounted() {
    if (localStorage.localItems) {
      this.$store.dispatch("cart/getLocalItems");
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  margin: 0;
}
#container {
  width: 86vw;
  margin: 0 auto;
  padding: 120px 0;
}
</style>
