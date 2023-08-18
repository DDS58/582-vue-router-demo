<template>
  <nav>
    <div @click="this.$router.go(-1)">Go Back</div>
    <div @click="this.$router.go(1)">Go Forward</div>
    <router-link to="/before/1">BEFORE</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/demo/1">Demo</router-link> |
    <div @click="this.$router.push({ name: 'prop', params: { id: 1 } })">
      Prop
    </div>
  </nav>
  <router-view />
  <PropRouteView id="30000"></PropRouteView>
</template>

<script>
import PropRouteView from "./views/PropRouteView.vue";

export default {
  name: "App",
  components: {
    PropRouteView,
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
