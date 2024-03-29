import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from "vue-cookies";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueCookies,
  render: h => h(App)
}).$mount('#app')
