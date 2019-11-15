<template>
  <div>
    <article>
      <h1 v-html="post.title" class="post-title" />
      <p class="post-date">{{formatDateTime(post.date)}}</p>
      <div v-html="post.content" />
    </article>
  </div>
</template>
<script>

import api from "../../api";
import config from "../../config";
import { DateTime } from "luxon";

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { post: payload };
    let data = await api.getPost(params.slug);
    return {
      post: data
    };
  },
  head() {
    return {
      title: `Nuxt WordPress | ${this.post.title.rendered}`,
      meta: [
        {
          name: "description",
          content: "This is the meta description of the content."
        }
      ]
    };
  },
  mounted() {
    // this.$store.dispatch('getPosts')
  },
  methods: {
    formatDateTime: datetime =>
      DateTime.fromISO(datetime).toFormat("MMMM d, yyyy")
  }
};
</script>