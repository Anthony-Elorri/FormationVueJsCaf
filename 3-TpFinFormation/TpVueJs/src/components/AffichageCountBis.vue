<template>
  <div>
    <p class="counter">Le compteur Affiche : {{ countBis }}</p>
    <p class="counter">Après {{ nbClickBis }} click<span v-if="nbClickBis >1">s</span></p>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "AffichageCountBis",
  computed: {
    countBis() {
      return store.state.countBis;
    },
    nbClickBis() {
      return store.state.nbClickBis;
    },
  },
};
</script>

<style scoped>
.counter {
  font-size: 30px;
  font-weight: bold;
}
</style>
