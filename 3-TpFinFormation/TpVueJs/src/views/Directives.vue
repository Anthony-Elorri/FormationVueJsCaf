<template>
  <div>
    <h1>Les Directives</h1>
    <div>
      <input type="radio" id="v-model" value="vmodel" v-model="checkedNames" />
      <label for="vmodel" class="label">v-model </label>
      |
      <input type="radio" id="v-if" value="vif" v-model="checkedNames" />
      <label for="vif" class="label">v-if </label>
      |
      <input type="radio" id="v-else" value="velse" v-model="checkedNames" />
      <label for="velse" class="label">v-else </label>
      |
      <input type="radio" id="v-for" value="vfor" v-model="checkedNames" />
      <label for="vfor" class="label">v-for </label>
      |
      <input type="radio" id="v-bind" value="vbind" v-model="checkedNames" />
      <label for="vbind" class="label">v-bind </label>
      |
      <input type="radio" id="v-on" value="von" v-model="checkedNames" />
      <label for="von" class="label">v-on </label>

      <AppVmodel v-if="checkedNames == 'vmodel'"></AppVmodel>
      <AppVif v-else-if="checkedNames == 'vif'"></AppVif>
      <AppVelse v-else-if="checkedNames == 'velse'"></AppVelse>
      <AppVfor v-else-if="checkedNames == 'vfor'"></AppVfor>
      <AppVbind v-else-if="checkedNames == 'vbind'"></AppVbind>
      <AppVon v-else-if="checkedNames == 'von'"></AppVon>
      <h4 v-else>Veuiller choisir une directive</h4>
    </div>
  </div>
</template>
<script>
import AppVmodel from "@/components/AppVmodel";
import AppVif from "@/components/AppVif";
import AppVfor from "@/components/AppVfor";
import AppVbind from "@/components/AppVbind";
import AppVon from "@/components/AppVon";
import AppVelse from "@/components/AppVelse";

export default {
  name: "Directives",
  components: {
    AppVmodel,
    AppVif,
    AppVfor,
    AppVbind,
    AppVon,
    AppVelse,
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #2b729b;
}
.label {
  font-weight: bold;
}
</style>
