<template>
  <Layout>
    <div>
      <section class="jumbotron-container">
        <div class="container-image">
          <b-carousel 
            style="text-shadow: 0px 0px 2px #000"
            fade
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              v-for="image in heroImages" 
              :key="image"
              :img-src="image.src"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="container-text">
          <div class="inner-container-text">
            <h1 class="jumbotron-heading accent">
              Inspiring Architectural Design Solutions for your home
            </h1>
            <p>
              {{intro}}
            </p>
          </div>
        </div>
      </section>

      <section class="summary-container">
        <div class="summary-content">
          {{summary}}
        </div>
      </section>

      <div class="section-title accent">
        <h1>Project Highlights</h1>
      </div>
      <section class="projects-container">
        <projectcards
          v-for="edge in $page.projectCards.edges"
          :key="edge.node.id"
          :project="edge.node"
        ></projectcards>
      </section>

      <div class="section-title accent">
        <h1>Testimonials</h1>
      </div>
      <section class="testimonials-container">
        <testimonials
         v-for="edge in $page.testimonials.edges"
          :key="edge.node.id"
          :testimonial="edge.node"
        ></testimonials>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  homeContent: allHomeContent {
    edges {
      node {
        intro
        summary        
        heroImages {
          image
        }
      }
    }
  },
  projectCards: allProjects {
    edges {
      node {
        id
        card {
          image
          description          
        }
      }
    }
  },
   testimonials: allTestimonials {
    edges {
      node {
        id
        title
        image        
      }
    }
  }  
}
</page-query>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import Testimonial from '../components/Testimonial.vue'

export default {  
  components: {
    projectcards: ProjectCard,
    testimonials: Testimonial
  },
  computed: {
    intro() { return this.$page.homeContent.edges[0].node.intro},
    summary() { return this.$page.homeContent.edges[0].node.summary},
    heroImages() { 
      var images = [];
      this.$page.homeContent.edges[0].node.heroImages.forEach( i => {
        images.push(require(`!!assets-loader!@uploads/${i.image}`));
      });
      return images;
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../layouts/theme.scss';

h1 {
  color: $dark;
  font-size: 30px;
}
.section-title {
  margin: 50px 20px 10px 20px;
}

.jumbotron-container {
  padding-top: 125px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .container-image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .carousel {
      height: auto;
      width: 100%;
      box-shadow: $shadow;
      margin-bottom: 20px;
    }
  }
  .container-text {
    padding: 10px;
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .inner-container-text {
      padding-bottom: 20px;
      .jumbotron-heading {
        margin-left: 10px;
        padding-right: 30px;
        text-align: left;
      }
      p {
        padding: 0 40px;
        text-align: center;
      }
    }
  }
}

.summary-container {
  .summary-content {
    padding: 0 40px;
    text-align: center;
  }
  .summary-tag {
    padding-left: 10px;
    span {
      color: $secondary;
    }
  }
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.testimonials-container {
  padding: 0 20px;
}

@media (min-width: $tablet) {
  .container-left {
    flex: 1 1 50%;
    z-index: 2;
  }

  .container-right {
    flex: 1 1 65%;
    z-index: 1;
    position: relative;

    .container-image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (min-width: $desktop) {
}
</style>
