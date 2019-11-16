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
import api from "~/common/api";
import config from "~/common/config";
import { parseISO, format } from "date-fns";

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    let  data = await api.getPost(params.slug);
    return {
      post: data
    };
  },
  head() {
    return {
      title: `${this.post.title.rendered} | Mildronize`,
      meta: [
        {
          name: "description",
          content: "This is the meta description of the content."
        }
      ]
    };
  },
  methods: {
    formatDateTime: datetime => format(parseISO(datetime), "MMMM d, yyyy")
  }
};
</script>
