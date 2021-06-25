import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    nbClick:0
  },
  mutations: {
    increment(state,nbUtilisateur){
      state.count += nbUtilisateur.nombre
    },
    decrement(state, nbUtilisateur){
      state.count -= nbUtilisateur.nombre
    },
    incrementNbClick: state => state.nbClick++    
  },
  actions: {
  },
  modules: {
  }
})
