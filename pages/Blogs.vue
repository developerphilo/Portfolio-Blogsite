<template>
  <article>
    <div v-for="blog in blogs" :key="blog.slug">
      <nuxt-link :to="blog.path">{{ blog.title }}</nuxt-link>
      <p>{{ blog.excerpt }}</p>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content("articles", params.slug)
      .sortBy("title")
      .fetch();
    return { blogs };
  },
};
</script>
<style scoped>
</style>