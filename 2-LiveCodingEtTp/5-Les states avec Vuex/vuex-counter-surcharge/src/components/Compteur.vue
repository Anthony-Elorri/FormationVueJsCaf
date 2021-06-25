<template>
    <div>
        <h4>Compteur Surcharge</h4>
        <p>{{count}}</p>
        <h4>Incrementation</h4>
        <input type="number" v-model.number="nbUtilisateur" placeholder="Entrez un nombre positif">
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "Compteur",
  data(){
    return{
      nbUtilisateur:""
    }
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
        store.commit("increment",{nombre:this.nbUtilisateur});
        this.nbUtilisateur="";
        store.commit("incrementNbClick");
    },
    decrement() {
        store.commit("decrement",{nombre:this.nbUtilisateur});
        this.nbUtilisateur="";
        store.commit("incrementNbClick");
    },
  },
};
</script>

<style>
</style>