<template>
  <article>
    <h1>{{ blog.title }}</h1>
    <p>Post Published on: {{ readableDate(blog.createdAt) }}</p>
    <nuxt-content :document="blog" />
  </article>
</template>



<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`articles/${params.slug}` || "index").fetch();

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