<template>
  <div>
    <input type="text" v-model="postBody" @change="postPost()" />
    <ul v-if="errors && errors.length">
      <ErrorsDetails v-for="error of errors" :key="error.id" :error="error" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ErrorsDetails from "../components/Errors.vue";

export default {
  components: { ErrorsDetails },
  name: "AxiosPost",
  data() {
    return {
      postBody: "",
      errors: [],
    };
  },
  methods: {
    // Pushes posts to the server when called.
    async postPost() {
      try {
        await axios
          .post(`http://jsonplaceholder.typicode.com/posts`, {
            body: this.postBody,
          })
          .then((response) => {
            this.$alert(response, "Ajout réussi", "success");
            console.log(response);
          });
      } catch (e) {
        this.errors.push(e);
        this.$alert(e.message, "Erreur lors de l'ajout...", "error");
      }
    },
  },
  //   methods: {
  //     // Pushes posts to the server when called.
  //     postPost() {
  //       axios
  //         .post(`http://jsonplaceholder.typicode.com/posts`, {
  //           body: this.postBody,
  //         })
  //         .then((response) => {alert(response, "Ajout réussi", "success");console.log(response);})
  //         .catch((e) => {
  //           this.errors.push(e);
  //         });
  //     },
  //   },
};
</script>