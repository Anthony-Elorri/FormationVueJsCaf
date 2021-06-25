<template>
  <div>
    <h1>Vuex : Bibliothèque de flux</h1>
    <div>
      <input type="radio" id="vuex-counter-simple" value="vuex-counter-simple" v-model="checkedNames" />
      <label for="vuex-counter-simple" class="label">Vuex Counter Simple </label>
      |
      <input type="radio" id="vuex-counter-surcharge" value="vuex-counter-surcharge" v-model="checkedNames" />
      <label for="vuex-counter-surcharge" class="label">Vuex Counter Surcharge </label>

      <AppVuexCounter v-if="checkedNames == 'vuex-counter-simple'"></AppVuexCounter>
      <AppVuexCounterSurcharge v-else-if="checkedNames == 'vuex-counter-surcharge'"></AppVuexCounterSurcharge>
      <h4 v-else>Veuiller choisir un exemple</h4>
    </div>
  </div>
</template>

<script>
import AppVuexCounter from "@/components/AppVuexCounter";
import AppVuexCounterSurcharge from "@/components/AppVuexCounterSurcharge";

export default {
name: "Vuex",
  components: {
    AppVuexCounter,
    AppVuexCounterSurcharge
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style>
.label {
  font-weight: bold;
}
</style>
