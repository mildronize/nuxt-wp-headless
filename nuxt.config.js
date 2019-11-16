import config from './common/config';
import api from './common/api';

const generateRoutes = ['/about'];

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'My Next site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#0057A3'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    // analyze: true,
  },
  generate: {
    routes: async () => {
      let routePosts = [];
      try {
        let { data } = await api.getAllPosts();
        routePosts = data.map((post) => (
          { 
            route: `/${config.post_prefix}/${post.slug}`,
            payload: post
          }
        ));
      } catch (e) {
        console.log(e);
      }
      console.log(routePosts);
      return [...generateRoutes, ...routePosts];
    }
  }
}

