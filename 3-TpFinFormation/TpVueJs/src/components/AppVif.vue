<template>
  <div>
    <h1><strong class="orange">v-if</strong></h1>
    
    <p>
      La directive <strong>v-if</strong> permet d'afficher un élément du dome
      uniquement si la condition est remplie. Dans cet exemple la phrase ne
      s'affiche uniquement que si la longueur du texte saisie est supérieure ou
      égale à un caractère.
    </p>
    <h3>1er exemple : Affichage conditionnel d'un élément</h3>
    <h3 v-if="user2.length > 0" class="space-top-bottom-10 orange">
      Je m'appelle {{ user2 }}
    </h3>
    <span>Veuillez entrer votre prénom :</span>
    <input v-model="user2" type="text" class="input-text" />
  
      <h3>2eme Exemple : Avec une variable booléen "seen"</h3>
    
    <p v-if="seen">Maintenant vous me voyez</p>
    <button @click="changeSeen">
      <span v-if="seen">Disparaître</span><span v-if="!seen">Apparaître</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppVif",
  data() {
    return {
      user2: "",
      seen: true,
    };
  },
  methods: {
    changeSeen() {
      this.seen = !this.seen;
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
