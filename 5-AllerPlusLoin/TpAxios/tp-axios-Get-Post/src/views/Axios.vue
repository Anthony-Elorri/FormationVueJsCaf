<template>
  <div>
    <div v-if="posts && posts.length">
      <b-card v-for="post in posts" v-bind:key="post.id" :title="post.title" class="cardSpaceBtm">
        <b-card-text>
          <!-- <strong>{{ post.title }}</strong> -->
          {{ post.body }}
        </b-card-text>        
      </b-card>
    </div>
    <div v-else>
      <img
        src="https://www.gif-maniac.com/gifs/54/54389.gif"
        alt="Chargement..."
      />
    </div>
    <ul v-if="errors && errors.length">
      <ErrorsDetails v-for="error in errors" :key="error.id" :error="error" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ErrorsDetails from "../components/Errors.vue";

export default {
  components: { ErrorsDetails },
  name: "AxiosGet",
  data() {
    return {
      posts: [],
      errors: [],
      loading: true,
    };
  },

  //   // Fetches posts when the component is created.
  //   created() {
  //     axios.get(`http://jsonplaceholder.typicode.com/posts`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.posts = response.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   }
  //}

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/posts`
      );
      this.posts = response.data;
    } catch (e) {
      this.errors.push(e);
      this.$alert(e.message, "Asynch error", "warning");
    }
  },
};
</script>

<style scoped>
.cardSpaceBtm{
  margin: 10px;
}

</style>