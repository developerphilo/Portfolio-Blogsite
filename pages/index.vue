<<template>
  <!-- component -->
  <div>
    <div class="w-full headerr">
    <div class="bg-cover bg-bottom h-1/4">
      <div class="text-center pt-48">
        <h1 class="font-medium text-5xl ">Front-End Developer</h1> <br />

        <h2 class="font-normal text-sm tracking-wide mt-5 mb-4 text-2xl text-indigo-600 font-semibold">
          There are no limits, except for those that we impose on ourselves</h2>
      </div>
      </div>
    </div>
    <Skillsect />
  </div>

</template>
 <script>
const Skillsect = () =>
  import(/*webpackChunkName: "Skillsect"*/ "@/components/Skillsect");
export default {
  components: {
    Skillsect,
  },
};
</script>
 <<style scoped>
 .headerr{
    height:600px;
    background-image: url('../assets/nicole-wolf-CZ9AjMGKIFI-unsplash.jpg');
    background-size:cover;
    background-position:center;
    object-fit:cover;
    background-repeat:no-repeat;
    width:100%;  
 }

 
 </style>