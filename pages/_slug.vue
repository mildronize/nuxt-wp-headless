<template>
  <div>
    <article>
      <!-- <h1 class="post-title">{{page.title.rendered}}</h1> -->
      <div v-html="page.content.rendered"></div>
    </article>
  </div>
</template>
<script>

import axios from "axios";
import config from "~/common/config";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      config.baseUrl + `pages&slug=${params.slug}`
    );
    return {
      page: data[0]
    };
  },
  head() {
    return {
      title: `${this.page.title.rendered}`,
      meta: [
        {
          name: "description",
          content: "This is the meta description of the content."
        }
      ]
    };
  }

};
</script>