<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Ma Todo Liste</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  max-width: 500px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #374e65;
  margin-top: 30px;
}
h1 {
  text-align: center;
}
</style>
