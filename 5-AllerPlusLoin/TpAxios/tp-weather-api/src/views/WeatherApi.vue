<template>
  <div>
    <div class="search">
      <WeatherSearch 
      v-model="zipCode"
      @keydown.enter="PostCity"
      />
    </div>
    <div v-if="!loaded">
      <img
        src="https://www.gif-maniac.com/gifs/54/54389.gif"
        alt="Chargement..."
      />
    </div>
    <div v-else>
      <WeatherCard :weather="this.weather" :path="this.imgPath" />
    </div>
    <ul v-if="errors && errors.length">
      <ErrorsDetails v-for="error in errors" :key="error.id" :error="error" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ErrorsDetails from "../components/Errors.vue";
import WeatherCard from "../components/WeatherCard.vue";
import WeatherSearch from '../components/WeatherSearch.vue';
const urlBase = "http://api.openweathermap.org/data/2.5/weather?";
const urlbaseImg = "http://openweathermap.org/img/wn/";
const imgArgs = "@2x.png"
var zip = "zip=";
var country = ",fr";
const uid = "&appid=a0b8d699c95706aaec9db4b16c71fa76";
const args = "&units=metric&lang=fr";

export default {
  components: { ErrorsDetails, WeatherCard, WeatherSearch },
  name: "weather-api",
  data() {
    return {
      weather: [],
      errors: [],
      loaded: false,
      Country: "",
      city: "",
      zipCode: "59780",
      imgPath:""
    };
  },
  methods: {
    async PostCity() {
      this.loaded = false;
      const API = urlBase + zip + this.zipCode + country + uid + args;
      try {
        const response = await axios.get(API);
        this.weather = response.data;
        this.imgPath = urlbaseImg+this.weather.weather[0].icon+imgArgs;
        this.loaded = true;
      } catch (e) {
        this.errors.push(e);
        this.$alert(e.message, "Asynch error", "warning");
      }
    },
  },
  created() {
    this.PostCity();
  },
};
</script>

<style>
</style>