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
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      return require(`!!assets-loader?width=720&height=540&fit=cover&position=centre&quality=90!@uploads/${this.project.card.image}`);
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
  padding: 10px;
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

@media (min-width: $desktop) {
  .card-project {
    flex: 0 0 50%;
    // max-width: 600px;
  }
}
</style>
