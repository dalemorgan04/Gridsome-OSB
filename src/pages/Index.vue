<template>
  <Layout>
    <div>
      <section class="jumbotron-container">
        <div class="container-image">
          <g-image v-if="!useCarousel"
            :src="homeContent.landing.carousel[0].image" class="card-img-top" />
          <b-carousel 
            v-if="useCarousel"
            style="text-shadow: 0px 0px 2px #000"
            fade
            controls                    
          >
            <b-carousel-slide
              v-for="i in homeContent.landing.carousel" 
              :key="i.index"
              :img-src="i.image"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="container-text">
          <div class="inner-container-text">
            <h1 class="jumbotron-heading accent">
              {{this.homeContent.landing.title}}
            </h1>
            <p>{{this.homeContent.landing.text}}</p>
            <div class="container-slogan">
              <span class="p">helping you create your </span>
              <span class="p highlight">happy.</span>
              <span class="p"> home</span>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-container">
        <div class="summary-image" >
          <g-image :src="homeContent.summary.image" fit="contain"/>
        </div>
        <div class="summary-content">
          <h1>{{this.homeContent.summary.title}}</h1>
          <p class="accent-bottom">
            {{this.homeContent.summary.text}}
          </p>
        </div>
      </section>

      <div class="section-title projects-title">
        <h1>
          <span class="projects-vertical">Feature&nbsp;</span>
          <span>Projects</span>
        </h1>
      </div>
      <section class="projects-container">
        <h1 class="projects-vertical">Feature</h1>
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
        <g-link to="/contact/" class="btn shadow">CONTACT</g-link> 
      </section>

    </div>
  </Layout>
</template>

<page-query>
query {
  home: allHomeContent {
    edges {
      node {
        landing {
          title
          text
          carousel {
            image
          }
        }
        summary {
          title
          text
          image
        }
        projects {
          project1 {
            title
            text
            image
          }
          project2 {
            title
            text
            image
          }
          project3 {
            title
            text
            image
          }
          project4 {
            title
            text
            image
          }
        }
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
  name: 'Home',
  metaInfo: {
    title: 'Home'  
  },
  components: {
    projectcards: ProjectCard,
    testimonials: Testimonial,
    quote: QuoteSvg
  },
  computed: {
    homeContent() { return this.$page.home.edges[0].node },
    useCarousel() { return this.homeContent.landing.carousel.length > 1 },    
    projects() { 
      var projects = [];
      projects.push( this.toProject( 1, this.homeContent.projects.project1 ));
      projects.push( this.toProject( 2, this.homeContent.projects.project2 ));
      projects.push( this.toProject( 3, this.homeContent.projects.project3 ));
      projects.push( this.toProject( 4, this.homeContent.projects.project4 ));
      return projects;      
    }
  },
  methods: {
    toProject(id, project) {
      return {
        id: id,
        title: project.title,
        text: project.text,
        image: project.image
      }
    }
  }
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
    max-height: 75vh;

    img {
      box-shadow: $shadow;
    }

    .carousel {
      overflow: hidden;      

        .carousel-inner {
          width: auto;
          margin-bottom: 20px;

          img {
            height: 100%;
            width: auto;
            box-shadow: $shadow;
          }
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
        text-align: left;
        padding: 0 10px;
      }
      .container-slogan {
        text-align: center;
        font-size: 14px;
        font-family: $font-slogan;

        .text {
          font-family: $font-slogan;
          color: $grey;
        }
        .highlight {
          font-family: $font-happy;
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
      padding-right: 20px;
      text-align: right;      
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

.projects-container .projects-vertical {
  display: none;
}

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
        font-family: $font-quote;
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
        .container-slogan {
          font-family: $font-slogan;
          font-size: 16px;

          .text {
            font-family: $font-slogan;
            color: $grey;
          }
          .highlight {
            font-family: $font-happy;
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
    position: relative;
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
       .projects-vertical{
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
      }
      .card-project:nth-child(2){
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
        text-align: right;
      }
      .card-project:nth-child(3){
        grid-column: 3 / span 1;
        grid-row: 2 / span 2;
      }
      .card-project:nth-child(4){
        grid-column: 1 / span 2;
        grid-row: 3 / span 2;
        text-align: right;
      }
      .card-project:nth-child(5){
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
          .text, .highlight {
            font-size: 20px;
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
        font-family: $font-happy;
      }
    }
  }
}

@media (min-width: $desktopL) {

  .projects-title{
    margin-left: 5%;

    h1 {
      margin-left: 100px;
      font-size: 80px;
    }

    .projects-vertical{
      display: none;  
    }
  } 

  .projects-container{
    .projects-vertical{
      transform: rotate(270deg);
      position: absolute;
      transform-origin: right bottom 0;
      float: left;
      right: 0;
      font-size: 80px;
      display: block;
    }
  }
}

</style>
