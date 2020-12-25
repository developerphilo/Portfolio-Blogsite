<template>
  <!-- component -->
  <div class="h-9">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-between p-2 items-center mb-2 font-bold">
      <div>
        <a href="/" class="text-black text-normal pl-10">
          <img
            :src="require(`~/assets/john-philip.webp`)"
            class="img-rounded"
            alt="profile picture of john philip"
            srcset=""
          />
          <span>John Philip</span>
        </a>
      </div>

      <ul class="list-reset flex">
        <li>
          <nuxt-link to="/" class="text-black p-2 md:p-4">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blogs" class="text-black p-2 md:p-4">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work" class="text-black p-2 md:p-4">Work</nuxt-link>
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
.header {
  background-image: url("../assets/nicole-wolf-CZ9AjMGKIFI-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
img {
  height: 36px;
  width: 36px;
  display: inline;
}
span {
  padding-left: 5px;
}
</style>