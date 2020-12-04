<template>
  <article>
    <h1>{{ blog.title }}</h1>
    <nuxt-content :document="blog" />
    <p>Post created on {{ readableDate(blog.createdAt) }}</p>
  </article>
</template>



<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content("articles", params.slug).fetch();

    return { blog };
  },
  methods: {
    readableDate(date) {
      const tarehe = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", tarehe);
    },
  },
};
</script>