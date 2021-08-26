export default {
  namespaced: true,
  state: {
    cartItems: { items: [], total: 0, qty: 0 },
  },

  mutations: {
    addProduct(state, payload) {
      let index = state.cartItems.items.findIndex(function(item) {
        return item.id === payload.productId;
      });
      if (index === -1) {
        let objProduct = { id: payload.productId, orderedQty: 1 };
        state.cartItems.items.push(objProduct);
      } else {
        state.cartItems.items[index].orderedQty++;
      }
      state.cartItems.qty++;
      state.cartItems.total += payload.productPrice;

      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    removeProduct(state, payload) {
      let index = state.cartItems.items.findIndex(function(item) {
        return item.id === payload.selectedProduct.id;
      });
      if (state.cartItems.items[index].orderedQty === 1) {
        state.cartItems.items.splice(index, 1);
      } else {
        state.cartItems.items[index].orderedQty--;
      }
      state.cartItems.qty--;
      state.cartItems.total -= payload.selectedProduct.price;

      localStorage.setItem("localItems", JSON.stringify(state.cartItems));
    },

    getLocalItems(state) {
      state.cartItems = JSON.parse(localStorage.getItem("localItems"));
    },
  },
  actions: {
    addProduct({ commit }, payload) {
      commit("addProduct", payload);
    },

    removeProduct(context, payload) {
      context.commit("removeProduct", payload);
    },

    getLocalItems(context) {
      context.commit("getLocalItems");
    },
  },
  getters: {
    cart(state, getters, rootGetters) {
      let newArr = [];
      let prodArr = rootGetters.prods.products;
      for (let i = 0; i < prodArr.length; i++) {
        for (let j = 0; j < state.cartItems.items.length; j++) {
          if (prodArr[i].id === state.cartItems.items[j].id) {
            prodArr[i].orderedQty = state.cartItems.items[j].orderedQty;
            newArr.push(prodArr[i]);
          }
        }
      }
      let cartProducts = {
        items: newArr,
        total: state.cartItems.total,
        qty: state.cartItems.qty,
      };

      return cartProducts;
    },
  },
};
