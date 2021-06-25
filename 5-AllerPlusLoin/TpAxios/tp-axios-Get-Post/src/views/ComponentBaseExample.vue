<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.id">
        <p>
          <strong>{{ post.title }}</strong>
        </p>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <ErrorsDetails v-for="error of errors" :key="error.id" :error="error" />
    </ul>
  </div>
</template>

<script>
import { HTTP } from "../http-common";
import ErrorsDetails from "../components/Errors.vue";

export default {
  components: { ErrorsDetails },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    HTTP.get(`posts`)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>