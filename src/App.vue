<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
    <footer-nav v-if="!$route.meta.isHideFooter"></footer-nav>
  </div>
</template>

<script>
import HeaderNav from './components/header.vue'
import FooterNav from './components/footerNav.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "App",
  components: {
    HeaderNav,
    FooterNav
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
