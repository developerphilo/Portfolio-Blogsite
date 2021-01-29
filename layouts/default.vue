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
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: calc(10px + 0.33vw);
  scroll-behavior: smooth;
  color: #121314;
  /* background-color: #0b0c0d;
  color: #f5f7fa; */
}
html:focus-within {
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
