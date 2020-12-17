<template>
  <!-- component -->
  <div class="h-9">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-between p-2 items-center mb-2 font-bold">
      <a href="/" class="text-black text-normal pl-10">John Philip</a>
      <ul class="list-reset flex">
        <li>
          <nuxt-link to="/" class="text-black p-2 md:p-4">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blogs" class="text-black p-2 md:p-4">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/uses" class="text-black p-2 md:p-4">Uses</nuxt-link>
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
 <<style scoped>
 .header{
  background-image: url('../assets/nicole-wolf-CZ9AjMGKIFI-unsplash.jpg');
  background-size:cover;
  background-repeat:no-repeat;
  width:100%;

     
 }

 
 </style>