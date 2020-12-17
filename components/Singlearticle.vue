<template>
  <article class="pt-8">
    <div class="wrapper antialiased text-gray-900 ml-6">
      <div>
        <img
          :src="require(`~/assets/${img}`)"
          :alt="title"
          class="object-cover object-center rounded-lg shadow-md"
        />

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span
                class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide pt-1 pb-1"
              >
                {{ tag }}
              </span>
            </div>
            <nuxt-link :to="path">
              <h4 class="mt-1 font-semibold uppercase leading-tight truncate">
                {{ title }}
              </h4>
            </nuxt-link>

            <div class="mt-1">
              <span class="text-gray-600 text-sm">{{ excerpt }}</span>
            </div>
            <div class="mt-4">
              <span class="text-teal-600 text-md font-semibold"
                >{{ published }}
              </span>
              <span class="text-sm text-gray-600 pl-2">John Philip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Singlearticle",
  props: ["path", "id", "title", "excerpt", "published", "img", "tag"],
};
</script>
<style scoped>
.wrapper {
  display: flex;
  place-items: center;
}
img {
  width: 450px;
  height: 350px;
}
</style>