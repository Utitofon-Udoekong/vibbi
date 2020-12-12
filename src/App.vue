<template>
  <v-app id="inspire">
    <!-- header -->
    <Header
      @toggle="toggleSideBar"/>

    <!-- sidebar -->
    <sidebar :drawer="drawer" @unToggle="unToggleSideBar" />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import sidebar from "./components/sidebar";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    sidebar,
    Header,
    Footer,
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    toggleSideBar() {
      this.drawer = !this.drawer;
    },
    unToggleSideBar() {
      this.drawer = false;
    }
  },
};
</script>