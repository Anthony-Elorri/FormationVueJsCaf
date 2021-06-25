<template>
  <div>    
    <p>Saisissez votre prénom pour l'inscrire dans le local storage</p>
    Mon nom est <input v-if="!name" id="name" v-on:keyup.enter="valider()" />
    <span v-else>{{ name }} <button @click="effacer()">Changer</button></span>
  </div>
</template>

<script>
export default {
  name: "LocalStorage",
  components: {},
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  methods: {
    valider() {
      var newName = document.getElementById("name").value;
      localStorage.name = newName;
      this.name = newName;
    },
    effacer() {
      localStorage.name = "";
      this.name = "";
    },
  },
};
</script>

<style scoped></style>
