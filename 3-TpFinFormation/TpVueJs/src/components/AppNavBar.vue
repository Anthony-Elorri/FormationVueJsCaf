<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    |
    <router-link to="/directives">
      Directives
    </router-link>
    |
    <router-link to="/vuex">
      Vuex
    </router-link>
    |
    <router-link to="/local-data">
      LocalData
    </router-link>
    |
    <router-link to="/chart">
      ChartJs
    </router-link>
    |
    <router-link to="/axios">
      Axios
    </router-link>
    |
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>

<script>
export default {
    name:"AppNavBar"
};
</script>

<style scoped>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #2b729b;
}
</style>
