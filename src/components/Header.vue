<template>
  <header id="header">
    <div class="brand">
      <LogoSvg />
    </div>
    <app-nav />
  </header>
</template>

<script>
import AppNav from './Nav.vue'
import LogoSvg from '../assets/images/OsbLogo.svg'
export default {
  components: {
    'app-nav': AppNav,
    LogoSvg
  },
  beforeMount() {
    window.addEventListener('scroll', this.navScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navScroll)
  },
  methods: {
    navScroll(event) {
      const nav = document.getElementById('header')
      if (
        document.body.scrollTop > 75 ||
        document.documentElement.scrollTop > 75
      ) {
        nav.classList.add('minified')
      } else {
        nav.classList.remove('minified')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../layouts/theme.scss';

header {
  position: absolute;
  top: 0;
  left: 0;
  height: 125px;
  width: 100%;
  text-align: center;
  z-index: 100;

  .brand {
      padding: 0 30px;

    svg {
      width: 100%;
      max-height: 75px;
    }
  }

  &.minified {
    position: fixed;
    height: 50px;

    .brand {
      display: none;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    /deep/ nav {
      transition: 0.4s;
      width: 100%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }

  h1 {
    color: $secondary;
  }
}

@media (min-width: $desktop) {
  header {
    display: flex;
    flex-direction: row;
    
    .brand {
      display: flex;
      flex-direction: column;
      justify-content: center;

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
}


</style>
