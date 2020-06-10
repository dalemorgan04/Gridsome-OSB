<template>
  <div class="card-project">
    <g-image :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
    </div>
  </div>
</template>
<script>
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
      return require(`!!assets-loader?width=720&height=540&fit=cover&position=centre&quality=90!@uploads/${this.project.image}`);
    },
    imageAlt() {
      return this.project.title;    
    },
    class() {
      return 'card-project ' + this.project.class ;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../layouts/theme.scss';
.card-project {
  padding: 20px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 720px;
  position: relative;

  img {
    box-shadow: $shadow;
  }

  .card-body {
    position: absolute;
    margin-right: 10px;
    margin-bottom: 10px;
    bottom: 0;
    left: 40%;
    background: $light;

    .card-title {
      font-family: $font-header;
      font-size: 30px;
      margin-right: 40px;
    }
    a {
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
}
</style>
