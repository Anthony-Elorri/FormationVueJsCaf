<template>
  <div>
    <h1>Le local storage</h1>
    <LocalStorage />
  </div>
</template>

<script>
import LocalStorage from "../components/LocalStorage";

export default {
  name: "LocalData",
  components: {
    LocalStorage,
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style></style>
