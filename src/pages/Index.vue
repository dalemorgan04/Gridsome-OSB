<template>
  <Layout>
    <div>
      <section class="jumbotron-container">
        <div class="container-image">

          <!-- <g-img src="/static/uploads/lounge.jpg" /> -->
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
        </div>
      </section>

      <div class="section-title accent">
        <h1>Project Highlights</h1>
      </div>
      <section class="projects-container">
        <projects
          v-for="edge in $page.projectCards.edges"
          :key="edge.node.id"
          :project="edge.node"
        ></projects>
      </section>

      <div class="section-title accent">
        <h1>Testimonials</h1>
      </div>
      <section class="testimonials-container">
        <testimonials
          v-for="testimonial in testimonials"
          v-bind:key="testimonial.id"
          v-bind:testimonial="testimonial"
        ></testimonials>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
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
  }
}
</page-query>

<static-query>
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
  }
}
</static-query>

<script>
import Projects from '../components/Projects.vue'
import Testimonials from '../components/Testimonials.vue'

export default {
  components: {
    projects: Projects,
    testimonials: Testimonials
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          image: 'house',
          imageAlt: 'house',
          title: 'Wollaton',
          text: 'A one floor extension that is really really good, so there'
        }
      ],
      testimonials: [
        {
          id: 1,
          image: 'bob',
          name: 'Bob McBobby',
          text: 'She was so helpful and my house looks amazeballs'
        }
      ]
    }
  },
  computed: {
    intro: function() { return this.$static.homeContent.edges[0].node.intro},
    intro: function() { return this.$static.homeContent.edges[0].node.intro}
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
    img {
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
