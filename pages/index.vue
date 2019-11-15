<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts">
       <NuxtLink :to="slugToUrl(post.slug)">
        <span v-html="post.title"></span>
       </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>

import api from "../api";
import { mapMutations, mapGetters, mapActions } from "vuex";
import config from '../config';

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts();

    return {
      posts: data
    };
  },
  methods: {
    slugToUrl: (slug) => ( `/${config.post_prefix}/${slug}` )
  }
};


</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
