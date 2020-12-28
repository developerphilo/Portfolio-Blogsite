<template>
  <div>
    <div class="work-head">
      <h1><span>/</span>work <span>.</span></h1>
      <p>Selected projects I've worked on in the past</p>
    </div>
    <div class="works-wrapper">
      <Work
        v-for="work in works"
        :key="work.id"
        :id="work.id"
        :title="work.title"
        :link="work.link"
        :img="work.img"
      />
    </div>
  </div>
</template>

<script>
const projects = require("../assets/work");
const Work = () => import(/*webpackChunkName: "Work"*/ "@/components/Work");
export default {
  name: "workswrapper",
  components: {
    Work,
  },
  data() {
    return {
      works: projects.works,
    };
  },
};
</script>

<style scoped>
.works-wrapper {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
}
.work-head {
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.work-head h1 {
  font-size: 2.5rem;
  font-weight: 500;
}
.work-head h1 span {
  color: gray;
  font-size: 2.5rem;
  font-weight: 500;
}
.work-head p {
  font-size: 1.345rem;
  margin-bottom: 1.25em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #474747;
}
</style>