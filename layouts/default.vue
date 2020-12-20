<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
const Header = () =>
  import(/*webpackChunkName: "Header"*/ "@/components/Header");
const Footer = () =>
  import(/*webpackChunkName: "Footer"*/ "@/components/Footer");
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-family: Zilla Slab, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
