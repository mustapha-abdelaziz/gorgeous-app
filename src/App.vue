<template>
  <the-header></the-header>
  <div id="container">
    <carousel class="carousel" title="OUR FEATURED PRODUCTS">
      <base-card
        v-for="item in featuredProducts"
        :key="item.id"
        :product="item"
      >
      </base-card>
    </carousel>
    <product-list  title="Skin Care">
      <base-card v-for="item in skinProducts" :key="item.id" :product="item">
      </base-card>
    </product-list>
    <base-panel></base-panel>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "./components/UI/Carousel.vue";
import BasePanel from "./components/UI/BasePanel.vue";

export default {
  name: "App",
  components: {
    Carousel,
    BasePanel,
  },
  data() {
    return {
      skinProducts: [],
      featuredProducts: [],
    };
  },
  computed: {
    ...mapGetters("prods", ["products"]),
  },

  methods: {},
  mounted() {
    if (localStorage.localItems) {
      this.$store.dispatch("cart/getLocalItems");
    }

    this.products.filter((el) => {
      if (el.category === "skincare") {
        this.skinProducts.push(el);
      }
      if (el.featured) {
        this.featuredProducts.push(el);
      }
    });

  },
};
</script>

<style>


@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap");

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
