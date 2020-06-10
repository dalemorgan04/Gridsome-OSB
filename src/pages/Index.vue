<template>
  <Layout>
    <div>
      <section class="jumbotron-container">
        <div class="container-image">
          <g-image v-if="!useHeroCarousel"
            :src="heroImage" class="card-img-top" />
          <b-carousel 
            v-if="useHeroCarousel"
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
        <div class="summary-image" >
          <g-image src="..\assets\uploads\house.jpg" fit="contain"/>
        </div>
        <div class="summary-content">
          <h1>Inspiring Architectural Design Solutions that Focus on your Wellbeing</h1>
          <p class="accent-bottom">
            OSB Architects offers proffesional, reliable and friendly architectural Design
            services to suit your requirements. Our designs are both practical and delightful.
            <br/>
            OSB architects believe it really is the little things that matter. With a keen
            attention to detail
          </p>
        </div>
      </section>

      <div class="section-title accent">
        <h1>Feature Projects</h1>
        <p>
          Here is a small selection of our completed projects
          Please take a look at our full gallery here
        </p>
      </div>
      <section class="projects-container">
        <!-- <projectcards
          v-for="edge in $page.projectCards.edges"
          :key="edge.node.id"
          :project="edge.node"
        ></projectcards> -->
        <projectcards
          v-for="project in this.projects"
          :key="project.id"
          :project="project"
        ></projectcards>
      </section>

      <section class="testimonials-container">
        <h1>Here's what some of our Happy People had to say</h1>
        <div class="quote-container accent-bottom">
          <QuoteSvg />
          <p class="quote accent">
            We have found Samantha to be extremely approachable, patient and easy to communicate with.
            We have been delighted with our experience.
          </p>
          <p class="client">Katie &amp; John 2018</p>
          <span class="rquote">&rdquo;</span>
        </div>
      </section>

      <section class="you-container">
        <h1 class="title">
          Would you like help with
          <span class="highlight"> Your Project</span>?
        </h1>
        <p class="text">
          What's your happy? Whether you're planning a small or large scale extension scheme,
          conversion project, remodelling works or complete new build construction project.
          <br>
          OSB Architects can help you achieve your Happy space.
          Please get in touch for further information or to arrange a free, no obligation
          initial meeting.
        </p>
        <g-link >Contact us</g-link> 
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
import QuoteSvg from '../assets/images/quote.svg'

export default {  
  components: {
    projectcards: ProjectCard,
    testimonials: Testimonial
  },
  data: function() {
    return {
      useHeroCarousel: false,
      projects: [
        { id: 1, image:'20191208_120024.jpg', title: 'Small extension with a big impact', description: 'A sensitive design approach in the Mapperley Park Conservation area'},
        { id: 2, image:'20191208_120024.jpg', title: 'Socialable space', description: 'A complete reconfiguration of this family home in Long Eaton to create a social open plan living space with improved connections to the garden'},
        { id: 3, image:'20191208_120024.jpg', title: 'Contemporary transformation', description: 'Amazing contemporary transformation of this semi detached 1930s property in Wollaton ona tight budget'},
        { id: 4, image:'20191208_120024.jpg', title: 'Creating a light filled space', description: 'Enhancing natural daylight to create a happy environment'}
      ]
    }
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
    },
    heroImage() {
      return this.heroImages[0];
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../layouts/theme.scss';

.section-title {
  margin: 50px 20px 10px 40px;
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

    img {
      box-shadow: $shadow;
    }
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
    padding: 20px;
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
  padding-top: 125px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .summary-image {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    img {
      box-shadow: $shadow;
    }
  }
  .summary-content {
    flex: 0 1 auto;    
    text-align: center;
    margin: 40px;

    h1 {
      text-align: left;      
    }
    p {
      padding: 0 20px 20px 0;
      text-align: right;
    }
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

  .card-project:nth-child(1){
    flex: 0 0 60%;
  }
  .card-project:nth-child(2){
    flex: 0 0 40%;
  }
  .card-project:nth-child(3){
    flex: 0 0 30%;
  }
  .card-project:nth-child(4){
    flex: 0 0 70%;
  }
}

.testimonials-container {    
  margin: 50px 20px;  
  padding: 0 20px;
  display: flex;
  align-content: center;

  .quote-container {
    flex: 1 1 80%;
    position: relative;
    font-family: $font-slogan;
    color: $grey;
    width: 50%;
    padding: 50px;

    .client{      
      text-align: right;
      padding: 10px;
    }
    .lquote, .rquote {
      position: absolute;
      font-family: $font-header;
      font-size: 100px;
    }
    .lquote {
      top: 0;
      left: 0;
    }
    .rquote {
      bottom: 0;
      right: 0;
    }
  }
}

.you-container{
  width: 50%;
  padding: 40px;
  margin: 0 auto;
  text-align: center;

  .title {

    .highlight{
      color: $primary;
      font-size: 60px;
      font-family: $font-happy;
    }
  }

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
    flex-direction: row;

    .summary-image {
      flex: 0 0 60%;
      position: relative;
      img {
        width: 100%;
      }
    }
    .summary-content {
      flex: 0 0 40%;
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
