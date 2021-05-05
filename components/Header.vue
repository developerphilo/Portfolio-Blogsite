<template>
  <!-- component -->
  <div class="h-9 font-serif pb-3">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-around pt-10 items-center mb-2 font-bold">
      <div>
        <a href="/" class="flex text-black text-normal pl-10">
          <img
            :src="require(`~/assets/john-philip.webp`)"
            class="img-rounded h-10 w-10"
            width="10"
            height="10"
            alt="picture of john philip"
            srcset=""
          />
          <span class="text-2xl pl-3">John</span>
        </a>
      </div>

      <ul class="list-reset flex text-1xl">
        <li>
          <nuxt-link to="/" class="text-black p-2 md:p-4">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blogs" class="text-black p-2 md:p-4">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="text-black p-2 md:p-4"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
 <script>
export default {
  name: "Header",
};
</script>
 <style scoped>
</style>