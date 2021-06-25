<template>
  <div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "Compteur",
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit("increment");
      store.commit("incrementNbClick");
    },
    decrement() {
      store.commit("decrement");
      store.commit("incrementNbClick");
    },
  },
};
</script>
