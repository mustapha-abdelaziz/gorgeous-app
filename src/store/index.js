import { createStore } from "vuex";
import productsModule from './Modules/products'
import cartModule from './Modules/cart'

export default createStore({
  modules:{
    prods: productsModule,
    cart: cartModule
  },
  state: {
    panelActive:false,
  },
  mutations: {
    openPanel(state){
      state.panelActive=true
    },
    closePanel(state){
      state.panelActive=false
    }
  },
  actions: {
    openPanel(context){
      context.commit('openPanel')
    },
    closePanel(context){
      context.commit('closePanel')
    }
  },
  getters:{
    panelActive(state){
      return state.panelActive
    }
  }

});
