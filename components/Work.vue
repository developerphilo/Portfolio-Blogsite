<template>
  <div class="project-wrapper">
    <div class="pwrap">
      <img
        :src="require(`~/assets/${img}`)"
        width="432"
        height="257"
        :alt="title"
      />
      <div class="p-title">
        <div>
          <h1>
            {{ title }}
            <span><img src="~assets/right-arrow.svg" alt="" /></span>
          </h1>
        </div>
        <a :href="link" target="_blank" rel="noopener noreferrer">visit link</a>
      </div>
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 5px;
}
.pwrap {
  width: 432px;
  height: 350px;
}
.p-title {
  padding-left: 1rem;
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
  font-size: 20px;
  margin-bottom: 5px;
  color: #1a1d20;
  line-height: 1.6em;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 10px;
}
a:hover {
  color: #0f4bf1 !important;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 5px;
  line-height: 1.6em;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 10px;
}
span img {
  width: 20px;
  display: inline;
}
span img:hover {
  fill: #0f4bf1 !important ;
  width: 20px;
  display: inline;
}
</style>