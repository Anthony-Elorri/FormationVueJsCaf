<template>
  <div>
    <button v-on:click="clicked('Vous avez cliqué le bouton 2')">
      Boutton 2
    </button>
  </div>
</template>

<script>
import clickMixin from "../mixins/clickMixin";
export default {
  name: "compteur2",
  //   methods: {
  //     clicked(value) {
  //       alert(value);
  //     },
  //   },
  mixins: [clickMixin],
};
</script>

<style>
</style>