<template>
  <div class="card">
    <div class="title">Rechercher une ville par Code Postal</div>
    <input :zipCode="this.zipCode" type="text" v-on="listeners" classe="input"/>
  </div>
</template>

<script>
export default {
  name: "weather-search",
  props: {
    zipCode: {
      type: String,
      require: true,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
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
  margin-bottom: 15px;
}
.title {
  background-color: rgb(243, 243, 243);
  color: rgb(77, 77, 77);
  font-size: 15px;
  padding: 7px;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
}
.line {
  padding-top: 10px;
  border: 2px solid rgb(243, 243, 243);
}
.data {
  width: 100%;
  font-size: 25px;
  color: rgb(243, 243, 243);
  border: 2px solid rgb(243, 243, 243);
  padding-bottom: 5px;
  border-radius: 0 0 5px 5px;
  border-collapse: collapse;
}
.input{
  width: 100%;
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
