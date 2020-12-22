<template>
  <div class="contact">
    <Contactform />
  </div>
</template>
<script>
const Contactform = () =>
  import(/*webpackChunkName: "Contact"*/ "@/components/Contact");
export default {
  components: {
    Contactform,
  },
};
</script>
<style scoped>
</style>