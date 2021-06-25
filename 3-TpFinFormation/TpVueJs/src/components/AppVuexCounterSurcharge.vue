<template>
  <div>
    <h1>Compteur avec surcharge de méthode</h1>
    <CompteurBis/>
    <AffichageCountBis/>
  </div>
</template>

<script>
import CompteurBis from '@/components/CompteurBis'
import AffichageCountBis from '@/components/AffichageCountBis'

export default {
  name: 'App',
  components: {
    CompteurBis,
    AffichageCountBis
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
