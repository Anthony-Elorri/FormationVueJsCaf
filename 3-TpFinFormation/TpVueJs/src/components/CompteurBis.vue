<template>
  <div>
    <h4>Compteur</h4>
    <p>{{ countBis }}</p>
    <h4>Incrémentation</h4>
    <input v-model.number="nbUtilisateur" type="number" placeholder="Entrez un nombre positif"/>
    <p>
      <button @click="incrementBis">+</button>
      <button @click="decrementBis">-</button>
    </p>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "CompteurBis",
  data() {
    return {
      nbUtilisateur: ""
    };
  },
  computed: {
    countBis() {
      return store.state.countBis;
    },
  },
  methods: {
    incrementBis() {
      store.commit("incrementBis",{nombre:this.nbUtilisateur});
      this.nbUtilisateur="";
      store.commit("incrementNbClickBis");
    },
    decrementBis() {
      store.commit("decrementBis",{nombre:this.nbUtilisateur});
      this.nbUtilisateur="";
      store.commit("incrementNbClickBis");
    },
  },
};
</script>
