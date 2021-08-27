<template>
  <div class="card-container">
    <div class="container__image">
      <img
        class="image__img"
        :src="product.image.src"
        :alt="product.image.alt"
      />

      <base-badge v-if="product.badge">{{ product.badge }}</base-badge>
    </div>
    <div class="container__caption">
      <div>
        <h3 class="caption__title">{{ product.title }}</h3>
        <p class="caption__desc">{{ product.desc }}</p>
      </div>
      <div>
        <div class="caption__price">
          <span class="price__new">${{ product.price }}</span>
          <span class="price__old" v-if="product.oldPrice"
            >${{ product.oldPrice }}</span
          >
        </div>
        <base-button
          :disabled="product.qty == 0"
          @click="
            addProduct(product.id, product.price);
            openPanel();
          "
          >Add to Cart</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addProduct(id, price) {
      this.$store.dispatch({
        type: "cart/addProduct",
        productId: id,
        productPrice: price,
      });
    },
    openPanel() {
      this.$store.dispatch("openPanel");
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 210px;
  max-width: 240px;
  width: 100%;
  color: #333333;
  text-align: center;
  background-color: #f7f7f7;
  line-height: 1.6em;
  border-radius: 5px;
  display: inline-block;
}
.card-container:hover img {
  opacity: 0.8;
}
.card-container * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.container__image {
  position: relative;
}
.image__img {
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
.container__caption {
  padding: 10px;
  margin-bottom: 10px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.caption__title,
.caption__desc {
  margin: 0;
  text-align: left;
  white-space: normal;
  font-size: 1.1em;
}
.caption__title {
  font-weight: 700;
  text-transform: capitalize;
}
.caption__desc {
  margin-bottom: 10px;
  font-size: 0.85em;
  font-weight: 500;
  text-transform: capitalize;
}
.caption__price {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2em;
  margin-bottom: .5em;
}
.price__old {
  font-size: 0.8em;
  text-decoration: line-through;
}
.price__new {
  font-weight: 700;
}

.caption__price span {
  margin-left: 0.3rem;
}

@media screen and (max-width: 425px) {
  .card-container {
    min-width: 100px;
    max-width: 110px;
  }

  .container__caption {
    padding: 0 10px;
    height: 170px;
  }

  .caption__desc,
  .caption__title {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 768px) {
  .card-container {
    min-width: 100px;
    max-width: 120px;
  }

  .caption__desc,
  .caption__title {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 1230px) {
  .card-container {
    min-width: 150px;
    max-width: 170px;
  }
}
</style>
