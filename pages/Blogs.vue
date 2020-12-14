<template>
  <article>
    <Btemplate />
    <div>
      <div class="flex mic flex-wrap">
        <Singlearticle
          v-for="blog in blogs"
          :key="blog.slug"
          :id="blog.slug"
          :path="blog.path"
          :title="blog.title"
          :excerpt="blog.excerpt"
          :published="blog.createdAt"
          :img="blog.img"
          :tag="blog.tag"
        />
      </div>
    </div>
  </article>
</template>

<script>
const Btemplate = () =>
  import(/*webpackChunkName: "Btemplate"*/ "@/components/Btemplate");
const Singlearticle = () =>
  import(/*webpackChunkName: "Singlearticle"*/ "@/components/Singlearticle");
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
.mic {
  margin: 0 auto;
}
</style>