<template>
  <div>
    <article>
      <h1 class="post-title">{{post.title.rendered}}</h1>
      <p class="post-date">{{formatDateTime(post.date)}}</p>
      <div v-html="post.content.rendered"></div>
    </article>
  </div>
</template>
<script>

import axios from "axios";
import config from "../../config";
import { DateTime } from "luxon";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      config.baseUrl + `posts&slug=${params.slug}`
    );
    return {
      post: data[0]
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