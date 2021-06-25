<template>
  <div id="app">
    <AppNavBar/>
    <router-view />
  </div>
</template>
<script>
import AppNavBar from "./components/AppNavBar";
export default {
  name: "App",
  components: {
    AppNavBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #2c3e50;
}
</style>
