import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[]
  },
  getters: {
  },
  mutations: {
    addItem(state,item){
      state.items.push(item)
    },
    initItem(state , items) {
      state.items = items
    },
    removeItem(state, id) {
      state.items = state.items.filter(item => item.time !== id);
    },
  },
  actions: {
  },
  modules: {
  }
})
