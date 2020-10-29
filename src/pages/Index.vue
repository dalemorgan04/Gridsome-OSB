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
          <g-image :src="houseImage" fit="contain"/>
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
        <h1>Here's what some of our<br> Happy People had to say</h1>
        <div class="quote-container accent-bottom">
          <div class="quote accent">
            <quote class="lquote"/>
            <p class="">
              We have found Samantha to be extremely approachable, patient and easy to communicate with.
              We have been delighted with our experience.
            </p>
          </div>
          <p class="client">Katie &amp; John 2018</p>
          <quote class="rquote"/>
        </div>
      </section>

      <section class="you-container">
        <h1 class="title">
          Would you like help with<wbr>
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
        <button class="btn btn-primary shadow">CONTACT</button>
        <!-- <g-link class="btn btn-primary">CONTACT</g-link>  -->
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
import House from '../assets/uploads/house.jpg'

export default {  
  components: {
    projectcards: ProjectCard,
    testimonials: Testimonial,
    quote: QuoteSvg
  },
  data: function() {
    return {
      useHeroCarousel: false,
      projects: [
        { id: 1, image:'20191208_120024.jpg', title: 'Small extension with a big impact', description: 'A sensitive design approach in the Mapperley Park Conservation area'},
        { id: 2, image:'20191208_120024.jpg', title: 'Socialable space', description: 'A complete reconfiguration of this family home in Long Eaton to create a social open plan living space with improved connections to the garden'},
        { id: 3, image:'20191208_120024.jpg', title: 'Contemporary transformation', description: 'Amazing contemporary transformation of this semi detached 1930s property in Wollaton ona tight budget'},
        { id: 4, image:'20191208_120024.jpg', title: 'Creating a light filled space', description: 'Enhancing natural daylight to create a happy environment'}
      ],
      houseImage: House
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
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px;

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
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .summary-image {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      box-shadow: $shadow;
      width: 100%;
      height: auto;
    }
  }

  .summary-content {
    flex: 1 1 auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 40px 40px 0 40px;

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

.projects-container{}

.testimonials-container {    
  margin: 40px 20px 40px 30px;
  display: flex;
  flex-direction: column;
  align-content: center;
  
  h1 {
    text-align: left;
    white-space: nowrap;
  }

  .quote-container {
    position: relative;
    font-family: $font-slogan;
    color: $grey;
    padding: 20px 0;

    .client{      
      text-align: right;
      padding: 10px;
    }
    .quote {
      p{
        padding: 20px 40px 0 40px;
      }
    }
    .lquote {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
    }
    .rquote {
      position: absolute;
      bottom: 4px;
      right: 10px;
      width: 30px;
      height: 30px;
    }

  }
}

.you-container{
  width: 100%;
  padding: 40px 20px;
  margin: 40px auto;
  text-align: center;

  .title {
    
    .highlight{
      color: $primary;
      font-size: 45px;
      font-family: $font-happy;
      white-space: nowrap;
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
    margin-top: 30px;

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
    padding: 0 20px;
    display: grid;
    grid-template-columns: 5% 45% 45% 5%;
    grid-template-rows: auto auto auto auto auto;
      .card-project {
        img{
          width: 100%;
        }
      }
      .card-project:nth-child(1){
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
        text-align: right;
      }
      .card-project:nth-child(2){
        grid-column: 3 / span 1;
        grid-row: 2 / span 2;
      }
      .card-project:nth-child(3){
        grid-column: 1 / span 2;
        grid-row: 3 / span 2;
        text-align: right;
      }
      .card-project:nth-child(4){
        grid-column: 3 / span 2;
        grid-row: 4 / span 2;
      }
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
    margin: 60px 0 200px 0;

    .summary-content {
      max-width: 700px;
    }
  }

  .projects-container{
    margin-bottom: 160px;
  }

  .testimonials-container {    
    flex-direction: row;
    padding: 0 50px;
    margin-bottom: 100px;

    h1 {
      padding-right: 30px;
    }

    .quote-container{
      flex: 1 1 60%;
      width: 50%;
      padding-top: 0;
    }
  }  

  .you-container{
    width: 50%;
    padding: 40px;
    margin: 80px auto;
    text-align: center;

    .title {

      .highlight{
        color: $primary;
        font-size: 60px;
        font-family: $font-happy;
      }
    }
  }
}
</style>
