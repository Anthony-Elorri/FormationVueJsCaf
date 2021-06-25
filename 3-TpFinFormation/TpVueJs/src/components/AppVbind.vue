<template>
  <div>
    <h1><strong>v-bind</strong></h1>
    <h3>1er Exemple : Binder le titre d'une &lt;div&gt;</h3>
    <div v-bind:title="message" class="jumbotron">
      Passez votre souris sur moi pour voir mon titre lié dynamiquement
    </div>
    <h3>2eme Exemple : Binder une valeur</h3>
    <div>Votre nom est : {{ name }}</div>
    <h4>La directive v-bind est UNIDIRECTIONNELLE (one-way data binding )</h4>
    <div>
      Modifier le nom :
      <!--Le v-bind est unidirectionel (one-way data binding )-->
      <input type="text" v-bind:value="name" />
      <h4>Changer la valeur d'un &lt;input&gt; avec v-bind ne change pas le state</h4>
    </div>
    <h3>3eme Exemple : Binder l'url d'un lien &lt;a&gt;</h3>
    <a v-bind:href="url" class="jumbotron" target="_blank">Elorri Formation</a>
  </div>
</template>

<script>
export default {
  name: "AppVbind",
  data() {
    return {
      message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
      name: "Anthony",
      url: "http://elorri.fr",
    };
  },
};
</script>

<style></style>
