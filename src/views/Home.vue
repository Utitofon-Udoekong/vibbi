<template>
  <v-app>
      <!-- main body -->
      <categoryMain />
  </v-app>
</template>

<script>
import categoryMain from "../components/categoryMain";

export default {
  name: "Home",
  components: {
    categoryMain
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleSideBar() {
      this.drawer = !this.drawer;
    },
    unToggleSideBar() {
      this.drawer = false;
    }
  }
};
</script>