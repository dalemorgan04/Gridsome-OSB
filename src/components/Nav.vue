<template>
  <nav>
    <ul class="d-flex flex-row justify-content-center align-items-center">
      <li class="selected"><g-link to="/">Home</g-link></li>
      <li><g-link to="/contact">Contact</g-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../layouts/theme.scss';

nav {
  background-color: white;
  height: 50px;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    height: 100%;
    li {
      list-style-type: none;
      font-size: 20px;
      padding: 10px;

      a {
        color: $dark;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

@media (min-width: $desktop) {
  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      padding: 20px;
      a {
        font-size: 25px;
      }
    }
  }
}
</style>
