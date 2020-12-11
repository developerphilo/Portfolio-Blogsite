<template>
  <article class="pt-8">
    <!-- Column -->
    <div class="my-1 px-1 lg:mx-auto lg:px-4 lg:w-1/3">
      <!-- Article -->
      <article class="overflow-hidden rounded-lg shadow-lg">
        <a :to="path">
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            :src="require(`~/assets/${img}`)"
          />
        </a>

        <header
          class="flex items-center justify-between leading-tight p-2 md:p-4"
        >
          <h1 class="text-lg">
            <a class="no-underline hover:text-teal-500 text-black" :href="path">
              {{ title }}
            </a>
          </h1>
          <p class="text-grey-darker text-sm">
            {{ published }}
          </p>
        </header>
      </article>
      <!-- END Article -->
      <!-- END of column -->
    </div>
  </article>
</template>

<script>
export default {
  name: "Singlearticle",
  props: ["path", "id", "title", "excerpt", "published", "img"],
};
</script>
<style scoped>
</style>