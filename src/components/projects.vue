<template>
  <div class="card-project">
    <!-- <g-img :src="image" :alt="imageAlt" class="card-img-top" /> -->
    <g-image src="/static/uploads/house/jpg" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.card.description }}</p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      return '/static' + this.project.card.image;
    },
    imageAlt() {
      return this.project.title;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../layouts/theme.scss';
.card-project {
  img {
    box-shadow: $shadow;
  }
  .card-body {
    position: relative;

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
