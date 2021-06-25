<template>
  <div>
    <h1>Compteur avec Vuex</h1>
    <Compteur/>
    <AffichageCount/>
  </div>
</template>

<script>
import Compteur from '@/components/Compteur'
import AffichageCount from '@/components/AffichageCount'

export default {
  name: 'App',
  components: {
    Compteur,
    AffichageCount
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
}
</style>