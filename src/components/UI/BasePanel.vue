<template>
  <div :class="{ active: panelActive }" class="panel-container">
    <div class="panel-container__header">
      <div class="left__section">
        <a @click="hidePanel" class="close__button">
          <span class="material-icons">
            close
          </span>
        </a>
        <span class="left-section__title"><b>Your Bag</b></span>
      </div>
      <span v-if="cart.qty !== 0">
        {{ cart.qty }} {{ cart.qty === 1 ? "Item" : "Items" }}</span
      >
    </div>

    <div class="emty-cart" v-if="cart.qty == 0">
      <span class="bag-icon material-icons">
        local_mall
      </span>
      <div>
        <span>Your shopping bag is empty </span>
      </div>
    </div>

    <div class="products__container" v-if="cart.qty !== 0">
      <div class="cart__products">
        <div class="product-items" v-for="item in cart.items" :key="item.id">
          <div class="items__image">
            <img :src="item.image.src" />
          </div>
          <div class="items__content">
            <span
              ><b>{{ item.orderedQty }}x {{ item.title }}</b></span
            >
            <br />
            <span>${{ item.price }}</span>
          </div>
          <div>
            <button @click="removeProduct(item)">ٌRemove</button>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-container__footer" v-if="cart.qty !== 0">
      <div class="footer__captions">
        <h2>Estimated Total</h2>
        <h2>
          <b>$ {{ cart.total }}</b>
        </h2>
      </div>
      <div class="footer__btn">
        <button id="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["panelActive"]),
    ...mapGetters("cart", ["cart"]),
  },

  methods: {
    hidePanel() {
      this.$store.dispatch("closePanel");
    },
    removeProduct(item) {
      this.$store.dispatch({
        type: "cart/removeProduct",
        selectedProduct: item,
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

* {
  scrollbar-width: auto;
  scrollbar-color: #b1b1b1 #ffffff;
}

*::-webkit-scrollbar {
  width: 18px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #b1b1b1;
  border-radius: 7px;
  border: 6px solid #ffffff;
}

.panel-container {
  transform: translateX(500px);
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #fafafa;
  width: 30vw;
  border-left: 1px solid #d9d9d9;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 13;
}

.active {
  transform: translate(0);
}

.panel-container__header {
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  min-height: 50px;
  max-height: 60px;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 1em;
}

.left__section {
  display: flex;
  align-items: center;
}

.left-section__title {
  margin-left: 0.5em;
}

.products__container {
  overflow-y: scroll;
  height: 100%;
}

.product-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 355px;
  width: 180px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 10px;
}

.product-items:hover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
}

.items__content {
  margin: 5px 10px 20px 10px;
}

.items__image img {
  position: relative;
  width: 100%;
}

.panel-container__footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  padding: 1em 2em 3em 2em;
}
.footer__captions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.footer__btn {
  width: 100%;
}

.footer__btn button {
  font-size: 20px;
  background-color: black;
  color: white;
  width: 100%;
  border-radius: 5px;
}

.footer__btn button:hover {
  background-color: rgb(39, 39, 39);
}
.emty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bag-icon {
  color: #d9d9d9;
  font-size: 2.4em;
}

.btn {
  display: block;
  font-size: 0.8em;
  color: #000000;
  line-height: 46px;
  letter-spacing: 1.5px;
  background-color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  cursor: pointer;
  margin: 5px;
}
.btn:hover {
  background: #000000;
  color: #ffffff;
}

.close__button {
  color: black;
  text-decoration: none;
  height: 24px;
  cursor: pointer;
}

.close__button:hover {
  color: #0000ff;
  transition-duration: 0s;
}

.cart__products {
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
}

button {
  width: 100%;
  height: 40px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-top: 1px solid rgb(187, 187, 187);
}

button:hover {
  background-color: rgb(228, 228, 228);
}
</style>
