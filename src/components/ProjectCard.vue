<template>
  <div class="card-project">
    <g-image :src="project.image" class="card-img-top" />
    <!-- <img :src="project.image" class="card-img-top" /> -->
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
    position: relative;
    margin-right: 10px;
    bottom: 0;
    
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);

    &:before{
      content:" ";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.8;
      background: $light;
    }

    .card-title, .card-text {
      position: relative;
    }

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

}

@media(min-width: $desktopL){
  .card-project {
    padding-bottom: 100px;

     .card-body {
      position: absolute;
      margin-bottom: 10px;
      left: 40%;

      .card-title{
        margin-right: 40px;
      }
     }
  }
}
</style>
