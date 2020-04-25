<template>
  <div class="card-testimonial">
    <div class="card-body">
      <p class="card-text">
        <i>{{ testimonial.body }}</i>
      </p>
    </div>
    <div class="image-container">
      <div class="image-cropper">
        <g-image
          :src="image"
          :alt="testimonial.title"
          class="card-img-bottom"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Testimonial',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      return require(`!!assets-loader!@uploads/${this.testimonial.image}`);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../layouts/theme.scss';
.card-testimonial {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0;
  position: relative;
  &:before {
    content: '❞';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 35px;
    font-family: serif;
  }
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    .image-cropper {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;

      img {
        display: inline;
        margin: 0 auto;
        width: auto;
        height: 100%;
      }
    }
  }
}
</style>
