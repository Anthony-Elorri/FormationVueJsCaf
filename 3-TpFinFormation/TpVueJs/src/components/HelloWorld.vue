<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Pour retrouver la documentation afin de vous aider à configurer votre
      projet avec la CLI, rendez-vous sur
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >la documentation vue-cli</a
      >.
    </p>
    <h3>Plug-in CLI installés</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
    </ul>
    <h3>Documentations Officielles</h3>
    <ul>
      <li>
        <a
          href="https://fr.vuejs.org/v2/guide/installation.html"
          target="_blank"
          rel="noopener"
          >Vue.js</a
        >
      </li>
      <li>
        <a
          href="https://router.vuejs.org/fr/guide/"
          target="_blank"
          rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org/guide/"
          target="_blank"
          rel="noopener"
          >vue-loader</a
        >
      </li>
     
      <li>
        <a href="https://vuex.vuejs.org/fr/" target="_blank" rel="noopener"
          >Vuex</a
        >
      </li>
    </ul>
    <h3>Documentations complémentaires</h3>
    <ul>
      <li>
        <a
          href="https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry"
          target="_blank"
          rel="noopener"
          >NPM</a
        >
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/JavaScript"
          target="_blank"
          rel="noopener"
          >Vanilla.js</a
        >
      </li>
      <li>
        <a
          href="https://babeljs.io/docs/learn-es2015/"
          target="_blank"
          rel="noopener"
          >JS moderne</a
        >
      </li>
      <li>
        <a
          href="https://babeljs.io/docs/en/"
          target="_blank"
          rel="noopener"
          >Babel</a
        >
      </li>
      <li>
        <a
          href="https://webpack.js.org/guides/"
          target="_blank"
          rel="noopener"
          >WebPack</a
        >
      </li>
    </ul>
<h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <h3>Communauté</h3>
    <ul>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2b729b;
}
</style>
