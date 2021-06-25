<template>
  <div class="home">
    <CountriesList/>
  </div>
</template>

<script>

import CountriesList from '@/components/CountriesList.vue'

export default {
  name: 'Home',
  components: {
    CountriesList,    
  }
}
</script>
