<template>
  <div class="project-wrapper">
    <div class="pwrap">
      <img :src="require(`~/assets/${img}`)" :alt="title" />
      <h1>{{ title }}</h1>
      <a :href="link" target="_blank" rel="noopener noreferrer"
        >Visit Link -></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "work",
  props: ["id", "link", "img", "title"],
};
</script>

<style scoped>
.project-wrapper {
  margin-bottom: 50px;
  width: 432px;
  height: 374.14px;
  box-shadow: 0px 8px 6px -6px rgba(235, 234, 242, 0.58);
}
.pwrap {
  width: 432px;
  height: 350px;
}
h1 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #1a1d20;
  line-height: 1.6em;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 10px;
}
img {
  width: 100%;
  height: 257px;
  max-width: 432px;
  height: auto;
}
a {
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  color: #1a1d20;
  line-height: 1.6em;
  font-weight: 500;
}
a:hover {
  color: #0f4bf1 !important;
  text-decoration: none;
  transition: 0.2s;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
</style>