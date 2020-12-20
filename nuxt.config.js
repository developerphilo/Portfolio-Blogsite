export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'John Philip | Front-End Web Developer | JavaScript, Vue.js, Nuxt.js, Node.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'John Philip | Front-End Developer', name: 'John Philip | Front-End Developer', content: 'I am a Front-End developer, writer and YouTuber based in Kenya, right in the heart of Africa. I can do remote work for any place in the world' }
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
