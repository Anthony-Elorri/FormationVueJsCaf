<template >
  <li>
    !! {{ error.message }} !!   
  </li>
</template>

<script>
export default {
  name: "errors-details",
  props:{
      error:{
          require: true
      }
  },
};
</script>

<style>
</style>