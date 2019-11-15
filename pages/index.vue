<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts">
        <span v-html="post.title">{</span>
      </li>
    </ul>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script>
import api from "../api";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts();

    return {
      posts: data
    };
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
