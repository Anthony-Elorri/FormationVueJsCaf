<template>
  <div class="card">
    <div class="cityTitle">
      <div>
        {{ weather.name }}
      </div>
      <div class="latlong">
        <span>lat: {{ weather.coord.lat }}</span> |
        <span>lon: {{ weather.coord.lon }}</span>
      </div>
    </div>
    <img :src="path" alt="" class="imgCard"/>

    <div class="title">Ciel & Nuages</div>
    <table class="data">
      <tr>
        <td class="label line">Ciel</td>
        <td class="line">{{ weather.weather[0].main }}</td>
      </tr>
      <tr>
        <td class="label line">Nuages</td>
        <td class="line">{{ weather.weather[0].description }}</td>
      </tr>
      <tr>
        <td class="label line">Visibilité</td>
        <td class="line">
          {{ weather.visibility / 1000 }} <span class="label">km</span>
        </td>
      </tr>
    </table>
    <div class="bottom"></div>

    <div class="title">Température - Pression - Humidité</div>
    <table class="data">
      <tr>
        <td class="label line">Température</td>
        <td class="line">
          {{ weather.main.temp }} <span class="label">°C</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Temp. Ressentie</td>
        <td class="line">
          {{ weather.main.feels_like }} <span class="label">°C</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Temp. Min.</td>
        <td class="line">
          {{ weather.main.temp_min }} <span class="label">°C</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Temp. Max.</td>
        <td class="line">
          {{ weather.main.temp_max }} <span class="label">°C</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Préssion</td>
        <td class="line">
          {{ weather.main.pressure }} <span class="label">hPa</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Humidité</td>
        <td class="line">
          {{ weather.main.humidity }} <span class="label">%</span>
        </td>
      </tr>
    </table>
    <div class="bottom"></div>

    <div class="title">Vent</div>
    <table class="data">
      <tr>
        <td class="label line">Vitesse</td>
        <td class="line">
          {{ weather.wind.speed }} <span class="label">kt</span>
        </td>
      </tr>
      <tr>
        <td class="label line">Orientation</td>
        <td class="line">
          {{ weather.wind.deg }} <span class="label">°</span>
        </td>
      </tr>
    </table>
    <div class="bottom end"></div>
  </div>
</template>

<script>
export default {
  name: "weather-card",
  props: {
    weather: {
      require: true,
    },
    path: {
      require: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(77, 77, 77);
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
}
.cityTitle {
  color: rgb(243, 243, 243);
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-top: 1px solid rgb(243, 243, 243);
  border-bottom: 1px solid rgb(243, 243, 243);
}
.title {
  background-color: rgb(243, 243, 243);
  color: rgb(77, 77, 77);
  font-size: 15px;
  padding: 7px;
  font-weight: bold;
  order: 2px solid rgb(243, 243, 243);
  border-radius: 5px 5px 0 0;
  margin-top: 10px;
}
.latlong {
  margin-top: 10px;
  font-size: 15px;
}
.imgCard{
  width:150px;
  margin-left: auto;
  margin-right: auto;
}
.bottom {
  background-color: rgb(243, 243, 243);
  border-radius: 0 0 5px 5px;
  margin-bottom: 15px;
  height: 10px;
}
.bottom.end {
  margin-bottom: 0;
}
.line {
  padding-top: 10px;
  border: 2px solid rgb(243, 243, 243);
  vertical-align: middle;
}
.data {
  width: 100%;
  font-size: 15px;
  color: rgb(243, 243, 243);
  border: 2px solid rgb(243, 243, 243);
  padding-bottom: 5px;
  /* border-radius:5px; */
  border-collapse: collapse;
}
.label {
  color: rgb(190, 93, 1);
}
@media (max-width:800px) {
  .card {
    width: 50%;
  }
}
@media (max-width:540px) {
  .card {
    width: 80%;
  }
}
</style>
