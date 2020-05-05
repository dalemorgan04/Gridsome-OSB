<template>
  <Layout>
    <div>
      <section class="jumbotron-container">
        <div class="container-image">
          <b-carousel 
            style="text-shadow: 0px 0px 2px #000"
            fade
          >
            <b-carousel-slide
              v-for="image in heroImages" 
              :key="image.index"
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
            <div class="container-slogan">
              <span class="text">helping you create your </span>
              <span class="highlight">happpy.</span>
              <span class="text"> home</span>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-container">
        <p class="summary-content">
          {{summary}}
        </p>
      </section>

      <div class="section-title accent">
        <h1>Feature Projects</h1>
      </div>
      <section class="projects-container">
        <projectcards
          v-for="edge in $page.projectCards.edges"
          :key="edge.node.id"
          :project="edge.node"
        ></projectcards>
      </section>

      <div class="section-title accent">
        <h1>Here's what some of our Happy People had to say</h1>
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
        text
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

.section-title {
  margin: 50px 20px 10px 20px;
}

.jumbotron-container {
  padding-top: 125px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .container-image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .carousel-inner {
      height: 20vh;
      overflow: hidden;

        .carousel {
          width: auto;
          box-shadow: $shadow;
          margin-bottom: 20px;
      }
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
        text-align: left;
        margin-left: 10px;
        padding-right: 30px;
      }
      p {
        text-align: right;
        padding: 0 10px;
      }
      .container-slogan {
        text-align: center;
        .text {
          font-family: $font-slogan;
          font-size: 14px;
          color: $grey;
        }
        .highlight {
          font-family: $font-happy;
          font-size: 26px;
          color: $primary;
        }
      }
    }
  }
}

.summary-container {
  display: none;

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

.projects-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.testimonials-container {
  padding: 0 20px;
}

@media (min-width: $tablet) {

  .jumbotron-container{
    display: flex;
    flex-direction: row-reverse;

    .container-image{
      flex: 0 0 60%;
    }
    .container-text{
      flex: 0 0 40%;

      .inner-container-text {
        p {
          text-align: right;
        }
        .container-slogan {
          .text {
            font-family: $font-slogan;
            font-size: 16px;
            color: $grey;
          }
          .highlight {
            font-family: $font-happy;
            font-size: 26px;
            color: $primary;
          }
        }
      }
    }
  }

  .summary-container {
    .summary-content {
      max-width: 700px;
    }
  }

  .projects-container{
    width: 100%;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}

@media (min-width: $desktop) {

  .jumbotron-container{

    .container-image{
      flex: 0 0 60%;
    }
    .container-text{
      flex: 0 0 40%;

      .inner-container-text {
        .container-slogan {
          .text {
            font-size: 20px;
          }
          .highlight {
            font-size: 35px;
          }
        }
      }
    }
  }

  .summary-container {
    .summary-content {
      max-width: 700px;
    }
  }  
}
</style>
