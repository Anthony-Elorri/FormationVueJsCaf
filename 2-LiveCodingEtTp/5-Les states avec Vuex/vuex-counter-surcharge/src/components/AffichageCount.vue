<template>
  <div>
      <p class="counter">Le compteur affiche : {{count}}</p>
      <p class="counter">Après {{nbClick}} click<span v-if="nbClick > 1">s</span></p>
  </div>
</template>

<script>
import store from '../store/index'
export default {
    name:'AffichageCount',
    computed:{
        count(){
            return store.state.count;
        },
        nbClick() {
            return store.state.nbClick;
        }
    }
}
</script>

<style scoped>
.counter{
    font-size: 30px;
    font-weight: bold;
}
</style>