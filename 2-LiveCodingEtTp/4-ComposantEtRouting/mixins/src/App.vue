<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Compteur1/>
    <Compteur2/>
  </div>
</template>

<script>
import Compteur1 from './components/Compteur1'
import Compteur2 from './components/Compteur2'

export default {
  name: 'App',
  components: {
    Compteur1,
    Compteur2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
