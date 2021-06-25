import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    nbClick:0,
    countBis:0,
    nbClickBis:0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    incrementNbClick: state=> state.nbClick++,
    incrementBis (state, nbUtilisateur){
      state.countBis += nbUtilisateur.nombre
      },
    decrementBis(state, nbUtilisateur){
      state.countBis -= nbUtilisateur.nombre
      },
    incrementNbClickBis: state=> state.nbClickBis++
  },
  actions: {
  },
  modules: {
  }
})
