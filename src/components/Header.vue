<template>
  <v-app-bar app>
    <!--  this should be beside the template below-->
    <template v-if="user.loggedIn">
      <v-app-bar-nav-icon @click="$emit('toggle')" class="mr-3"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-responsive>
        <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
      </v-responsive>
    </template>
    <ul class="navbar-nav ml-auto">
      <template v-if="user.loggedIn">
        <v-btn elevation="2" color="grey" router @click.prevent="signOut">Logout</v-btn>
        <div class="nav-item">{{user.data.displayName}}</div>
      </template>
      <template v-else>
        <v-list rounded dense class="d-flex">
          <v-list-item router :to="`/Login`">
            <v-list-item-content>
              <v-list-item-title class="nav-link">Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router :to="`/Register`">
            <v-list-item-content>
              <v-list-item-title class="nav-link">Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </ul>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        });
    }
  }
};
</script>