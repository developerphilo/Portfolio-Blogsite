<<template>
  <!-- component -->
  <div>
    <div class="w-full headerr bg-no-repeat bg-center">
    <div class="bg-cover bg-bottom h-1/4">
      <div class="text-center pt-40">
        <h1 class="font-medium text-5xl ">Front-End Developer</h1>
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
    background-image: url('../assets/background-image-undrew.svg');
  
 }

 
 </style>