<template>
  <div>
    <h1><strong>v-if - v-else-if - v-else</strong></h1>
    <div>
            <h3>1er Exemple : Choisissez la &lt;div&gt; à afficher</h3>
            <!-- 1er exemple avec un input "radio" -->
            <input type="radio" value="premier" v-model="choixDiv" />
            <label>Première </label>
            |
            <input type="radio" value="deuxieme" v-model="choixDiv" />
            <label> Deuxième </label>
            |
            <input type="radio" value="troisieme" v-model="choixDiv" />
            <label> Troisième </label>

            <h4 v-if="choixDiv == 'premier'"> Je m'affiche si "Première" est séléctionné</h4>
            <h4 v-else-if="choixDiv == 'deuxieme'"> Je m'affiche si "Deuxième" est séléctionné</h4>
            <h4 v-else-if="choixDiv == 'troisieme'"> Je m'affiche si "Troisième" est séléctionné</h4>
            <h4 v-else> Je m'affiche si vous n'avez rien séléctionné</h4>
        </div>

        <div>
            <h3>2eme Exemple : Quel genre êtes-vous?</h3>
            <!-- 2eme exemple avec un select -->
            <select v-model="gender">
                <option value="Mme">Mme</option>
                <option value="Mr">Mr</option>               
            </select>
            <img src="../assets/Mr.png" v-if="gender=='Mr'" />
            <img src="../assets/Mme.png" v-else-if="gender=='Mme'" />
            <img src="../assets/unknown.jpg" v-else />
        </div>

        <div>
            <h3>3eme Exemple : Réutilisation des éléments par Vue</h3>
            <!-- 3eme Exemple Avec Réutilisation des composants-->
            <!-- Vues réutilise au maximum les éléments afin de limiter les modifications (et donc les rechargement)-->
            <!-- Notez l'emplois d'un template afin d'appliquer la directive v-if à plusieurs éléments-->
            <template v-if="loginName">
                <h4>Nom d'utilisateur</h4>
                <input placeholder="Entrez votre nom d'utilisateur">
            </template>
            <template v-else>
                <h4>Email</h4>
                <input placeholder="Entrez votre adresse email">
            </template>
            <button @click="changeConnectionType">Changer de méthode de connection</button>
        </div>

        <div>
            <h3>4eme Exemple : Bloquer la réutilisation des éléments par Vue</h3>
            <!-- 4eme Exemple Sans réutilisation des composants -->
            <!-- Pour forcer Vue.js recharger un élément, il faut ajouter une clé (key)-->
            <!-- Grace à la clé il sait que l'input est pour un type bien particulier et en recharge un autre-->
            <template v-if="loginNameBis">
                <h4>Nom d'utilisateur</h4>
                <input placeholder="Entrez votre nom d'utilisateur" key="username-input">
            </template>
            <template v-else>
                <h4>Email</h4>
                <input placeholder="Entrez votre adresse email" key="email-input">
            </template>
            <button @click="changeConnectionTypeBis">Changer de méthode de connection</button>
        </div>
    
  </div>
</template>

<script>
export default {
  name: "AppVelse",
  data() {
    return {
      choixDiv:[],
      gender:'',
      loginName:true,
      loginNameBis:false
    };
  },
  methods: {
    changeConnectionType() {
        this.loginName = !this.loginName
    },
    changeConnectionTypeBis() {
        this.loginNameBis = !this.loginNameBis
    }
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
