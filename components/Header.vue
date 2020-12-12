<template>
  <!-- component -->
  <div class="h-9">
    <!-- Text shadow utilities will be cool -->
    <nav class="flex justify-between p-2 items-center mb-2 font-bold">
      <a href="#" class="text-black text-normal pl-10">John Philip</a>
      <ul class="list-reset flex">
        <li>
          <NuxtLink to="/" class="text-black p-2 md:p-4">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-black p-2 md:p-4">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs" class="text-black p-2 md:p-4">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/uses" class="text-black p-2 md:p-4">Uses</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-black p-2 md:p-4"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
 <script>
export default {};
</script>
 <<style scoped>
 .header{
background-image: url('../assets/nicole-wolf-CZ9AjMGKIFI-unsplash.jpg');
background-size:cover;
background-repeat:no-repeat;
width:100%;

     
 }

 
 </style>