<template>
  <div>
    <h1><strong>v-for</strong></h1>
    <p>
      Nous pouvons utiliser la directive
      <strong>v-for</strong> pour faire le rendu d’une liste d’éléments en nous
      basant sur un tableau. La directive <strong>v-for</strong> utilise une
      syntaxe spécifique de la forme <strong>item in items</strong>, où items
      représente le tableau source des données et où item est un alias
      représentant l’élément du tableau en cours d’itération (ici une liste de
      personnes) :
    </p>

    <!-- Exemple de directive V-for -->
    <h3>1er Exemple: Affichage d'une liste de nom</h3>
    <div
      v-for="personne in personnes"
      v-bind:key="personne"
      class="liste-personnes"
    >
      <div>
        {{ personne }}
      </div>
    </div>
    <h3>2eme Exemple: Affichage d'une liste d'objet</h3>
    <div>
      <div
        v-for="person in personList"
        v-bind:key="person.id"
        class="liste-personnes"
      >
        <span v-if="person.gender == 'Mr'">
          <img src="../assets/Mr.png" />
          <div>{{ person.name }}</div>
        </span>
        <span v-else-if="person.gender == 'Mme'">
          <img src="../assets/Mme.png" />
          <div>{{ person.name }}</div>
        </span>
        <span v-else>
          <img src="../assets/unknown.jpg" />
          <div>{{ person.name }}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVfor",
  data() {
    return {
      personnes: [
        "Anthony",
        "Laura",
        "Samir",
        "Fréderique",
        "Jean-Eude",
        "Rachida",
      ],
      personList: [
        { gender: "Mr", name: "Titi" },
        { gender: "?", name: "Jean-Martine" },
        { gender: "Mme", name: "Tata" },
        { gender: "Mr", name: "Toto" },
      ],
    };
  },
};
</script>

<style>
.liste-personnes {
  margin: 10px 0 20px 0;
}
</style>
