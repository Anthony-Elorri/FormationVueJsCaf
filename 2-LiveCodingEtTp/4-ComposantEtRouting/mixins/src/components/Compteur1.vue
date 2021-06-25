<template>
  <div>
    <button v-on:click="clicked('Vous avez cliqué le bouton 1')">
      Boutton 1
    </button>
  </div>
</template>

<script>
import clickMixin from '../mixins/clickMixin'
export default {
  name: "compteur1",
//   methods: {
//     clicked(value) {
//       alert(value);
//     },
//   },
mixins:[clickMixin]
};
</script>

<style>
</style>