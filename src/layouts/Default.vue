<template>
  <div id="app" class="d-flex flex-column">
    <appheader />

    <main role="main" class="main">
      <slot/>
    </main>

    <appfooter />
  </div>
</template>

<script>

import AppHeader from '~/layouts/Header.vue'
import AppFooter from '~/layouts/Footer.vue'

export default {
  components: {
    appheader: AppHeader,
    appfooter: AppFooter
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../layouts/theme.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  height: 100vh;
}

main {
  flex: 1 0 auto;
}
</style>
