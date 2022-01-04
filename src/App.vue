<template>
  <div id="app">
    <b-navbar transparent fixed-top shadow>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="@/assets/images/xs-logo.png"
            alt="Logo BARFoodies, perro y gato con un bol de comida"
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./scss/_variables.scss";
@import "./scss/_main.scss";
@import "./scss/_footer.scss";
@import "./scss/_quiz.scss";

#app {
  font-family: $montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
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

<script>
// @ is an alias to /src
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
