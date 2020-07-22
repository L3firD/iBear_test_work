import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleTable: [
      'Title-1',
      'Title-2',
    ],
  },
  mutations: {
    loadTitle(state, payload){
      if(state.titleTable.length > 4) {
        state.titleTable.shift()
      }
      state.titleTable.push(payload)
    }
  },
  actions: {},
  modules: {}
})
