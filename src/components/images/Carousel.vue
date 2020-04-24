<template>
    <b-carousel 
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
    >            
        <!-- <b-carousel-slide
        v-for="image in images" :key="image"
        caption="First slide"
        :img-src="image"
        ></b-carousel-slide>               -->
    </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    imageNames: {
      type: [],
      required: true
    }
  },
  computed: {
    images() {
        var imageList = []
        this.imageNames.array.forEach(image => {
            // imageList.push(
            //     require(`!!assets-loader!@uploads/${image}`));
            imageList.push(`${image}`)
        });
      return imageList;
    },
    image() { 
      var image = 'house.jpg'
      return  require(`!!assets-loader!@uploads/${image}`)
      }
  }
}
</script>
