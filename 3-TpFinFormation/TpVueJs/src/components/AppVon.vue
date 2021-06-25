<template>
  <div>
    <h1>
      <strong>v-on</strong>
    </h1>

    <p>
      La directive <strong>v-on</strong> permet d'écouter les évènements du DOM
      afin d’exécuter du JavaScript lorsque ces évènements surviennent.
    </p>

    <div>
      <!-- 1er exemple : incrémenter un compteur -->
      <h3>1er exemple : Incrémenter un compteur</h3>
      <button v-on:click="counter += 1">Add 1</button>
      <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
    </div>
    <div>
      <!-- 2eme exemple : Déclencher d'une methode avec évènement "click"-->
      <h3>2eme exemple : Déclencher une méthode (évènement "click")</h3>
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Retourner Message</button>
    </div>
    <div>
      <!-- 3eme exemple : Déclencher d'une methode avec évènement keydown-->
      <h3>3eme exemple : Déclencher une méthode (évènement "keydown")</h3>
      Saisir le message à afficher :
      <input type="text" v-model="text" v-on:keydown.enter="say(text)" class="input-text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVmodel",
  data() {
    return {
      counter: 0,
      message: "Hello Vue.js !",
      text: "",
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    say: function(message) {
      alert(message);
    },
  },
};
</script>

<style>
.input-text {
  font-size: 15px;
  margin: 15px;
  padding: 5px;
}
</style>
