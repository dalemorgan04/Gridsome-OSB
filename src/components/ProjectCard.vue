<template>
  <div class="card-project">
    <g-image :src="project.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title h2">{{ project.title }}</h5>
      <p class="card-text p">{{ project.text }}</p>
    </div>
  </div>
</template>
<script>
const path = require('path');
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      //return path.resolve(__dirname,"static/uploads/",this.project.image);
      return require(`!!assets-loader!~${this.project.image}`);
      // return "";
    },
    imageAlt() { return this.project.title; },
    class() { return 'card-project ' } // + this.project.class; }
  }
}
</script>
<style lang="scss" scoped>
@import '../layouts/theme.scss';
.card-project {
  padding: 20px;
  width: 100%;  
  position: relative;
  overflow: hidden;

  img {
    box-shadow: $shadow;
    width: 100%;

  }

  .card-body {
    position: static;
    margin-right: 10px;
    bottom: 0;
    left: 40%;
    background: $light;

    .card-title {
      font-family: $font-header;
      font-size: 24px;
    }
    a {
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
}
@media(min-width: $desktopL){
  .card-project {
    padding-bottom: 100px;

     .card-body {
      position: absolute;
      margin-bottom: 10px;

      .card-title{
        margin-right: 40px;
      }
     }
  }
}
</style>
