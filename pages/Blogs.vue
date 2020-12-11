<template>
  <article>
    <Btemplate />
    <div>
      <div class="container mx-auto">
        <Singlearticle
          v-for="blog in blogs"
          :key="blog.slug"
          :id="blog.slug"
          :path="blog.path"
          :title="blog.title"
          :excerpt="blog.excerpt"
          :published="blog.createdAt"
          :img="blog.img"
        />
      </div>
    </div>
  </article>
</template>

<script>
const Btemplate = () => import("@/components/Btemplate");
const Singlearticle = () => import("@/components/Singlearticle");
export default {
  components: {
    Btemplate,
    Singlearticle,
  },
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