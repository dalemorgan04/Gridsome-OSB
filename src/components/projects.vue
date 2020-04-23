<template>
  <div class="card-project">
    <g-image :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.card.description }}</p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Projects',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() { return "@/assets/uploads/" + this.project.card.image },
    image() {
      return require(`!!assets-loader!@uploads/${this.project.card.image}`);
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
  width: 100%;

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
