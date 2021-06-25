<template>
  <div>
    <h1>
      <strong>v-model</strong>
    </h1>

    <p>
      La directive <strong>v-model</strong> permet de mettre à jour un élément
      du dome automatiquement et en temp réel en fonction d'une variable. Dans
      l'exemple ci-dessous, le prénom se met à jour
      <strong>en temps réel</strong> en fonction de la saisie de l'utilisateur.
      <strong>Le v-model est bidirectionel (two way data flow )</strong>
    </p>

    <h4 class="space-top-bottom-10 orange">Je m'appelle {{ user }}</h4>

    <span>Veuillez modifier le prénom :</span>

    <!-- Exemple de directive V-model -->
    <!-- Le v-model est bidirectionel (two way data flow ) -->
    <input v-model="user" type="text" class="input-text" />
    <h3>Cette &lt;span&gt; interprète le HTMl avec <strong>v-html</strong></h3>
    <div>Votre nom est : <span v-html="user"></span></div>
  </div>
</template>

<script>
export default {
  name: "AppVmodel",
  data() {
    return {
      user: "<b>Anthony</b>",
    };
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
