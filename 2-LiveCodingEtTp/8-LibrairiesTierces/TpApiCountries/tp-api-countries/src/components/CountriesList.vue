<template>
  <div class="CountriesList">
    <h1>Nom des Pays</h1>
    
      <div v-if="!loaded">
        <img
          src="https://www.gif-maniac.com/gifs/54/54389.gif"
          alt="Chargement..."
          class="loading"
        />
      </div>

      <b-card
        v-else
        v-for="(pays, index) in pays"
        :key="index"
        :title="pays.translations.fr"
      >
      
        <b-img :src="pays.flag" alt="Drapeau du pays" height="250px" />
        <div class="details">Capitale : <b>{{ pays.capital }}</b></div>
        <div class="details">Population : <b>{{ pays.population }} hab.</b></div>
        <div class="details">Monnaie : <b> {{ pays.currencies[0].name }}</b></div>
        <div class="details">Symbol : <b>{{ pays.currencies[0].symbol }}</b></div>
        <div class="details">Région : <b> {{ pays.region }}</b></div>
        <div class="details">Timezone : <b>{{ pays.timezones }}</b></div>
      </b-card>
    
    <ul v-if="errors && errors.length">
      <div v-for="error in errors" :key="error.id">
        {{ error.message }}
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  name: "countries-list",
  data() {
    return {
      pays: [],
      errors: [],
      loaded: false,
    };
  },
  methods: {
    async GetAllCountries() {
      this.loaded = false;
      try {
        const response = await api.get("all");
        this.pays = response.data;
        //console.log(this.pays);
        this.loaded = true;
      } catch (e) {
        this.errors.push(e);
        this.$alert(e.message, "Asynch error", "warning");
      }
      this.loaded = true;
    },
  },
  mounted() {
    this.GetAllCountries();
  },
};
</script>

<style scoped>
.loading{
    margin-left: auto;
    margin-right: auto;
}
</style>