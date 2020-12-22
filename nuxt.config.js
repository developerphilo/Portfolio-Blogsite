export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js',
    htmlAttrs: {
      lang: "en",  // it sets the language English
    },
   meta: [
  { property: "og:site_name", content: "John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js" },
  { hid: "og:type", property: "og:type", content: "website" },
  {
    hid: "og:url",
    property: "og:url",
    content: "https://portfolio-blogsite.netlify.app",
  },
  {
    hid: "og:title",
    property: "og:title",
    content: "John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js",
  },
  {
    hid: "og:description",
    property: "og:description",
    content: "John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js",
  },
  {
    hid: "og:image",
    property: "og:image",
    content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },
  { property: "og:image:width", content: "740" },
  { property: "og:image:height", content: "300" },
    { name: "twitter:site", content: "@amjohnphilip" },
  { name: "twitter:card", content: "summary_large_image" },
  {
    hid: "twitter:url",
    name: "twitter:url",
    content: "https://portfolio-blogsite.netlify.app",
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: "John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js",
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: "John Philip | Front-End Developer | JavaScript, Vue.js, Nuxt.js, Node.js"
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },

],
  link: [
      { rel: 'icon', type: 'image/x-icon', href: '/john-philip.png' }
    ]
},
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scroll-indicator', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'

  ],
  // prism-themes/themes/prism-material-oceanic.css
  content: {
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-material-oceanic.css'
    }
  }
},
pageTransition:{
  name:'page',
  mode:'out-in'

},
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
     configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  }
  ,
    analyze:true,
  }
}
