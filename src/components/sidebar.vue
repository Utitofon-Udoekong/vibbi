<template>
  <v-navigation-drawer v-model="drawer" fixed temporary>
    <v-list-item class="d-flex justify-space-between py-2">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }" >
          <v-btn icon x-large class="mr-3" v-on="on">
            <v-avatar color="brown" size="48">
              <img src="../assets/images/user.png" alt />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown" class="mb-2">
                <span class="white--text headline">{{ owner.initials }}</span>
              </v-avatar>
              <h3>{{ owner.fullName }}</h3>
              <p class="caption mt-1">{{ owner.email }}</p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                router
                :to="`/dashboard`"
                @click="$emit('unToggle')"
              >View Account</v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click.prevent="signOut">Logout</v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>

      <v-btn small fab @click="$emit('unToggle')">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        router
        :to="item.route"
        @click="$emit('unToggle')"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items2"
        :key="item.title"
        @click="$emit('unToggle')"
        router
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items3"
        :key="item.title"
        @click="$emit('unToggle')"
        router
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items4"
        :key="item.title"
        @click="$emit('unToggle')"
        router
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "sidebar",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard", route: "/" },
      { title: "Trending", icon: "mdi-forum", route: "/Trending" },
      { title: "Subscriptions", icon: "mdi-bookmark", route: "/signUp" }
    ],
    items2: [
      { title: "Library", icon: "mdi-library", route: "/library" },
      { title: "History", icon: "mdi-history", route: "/history" },
      { title: "Watch Later", icon: "mdi-watch-later", route: "/watch-later" },
      { title: "Liked Videos", icon: "mdi-emoticon-happy", route: "/liked-videos"
      }
    ],
    items3: [
      { title: "Settings", icon: "mdi-view-dashboard", route: "/settings" },
      { title: "Help", icon: "mdi-help", route: "/help" },
      { title: "Send Feedback", icon: "mdi-forum", route: "/feedback" }
    ],
    items4: [
      { title: "About", icon: "mdi-forum", route: "/about" },
      { title: "Contact Us", icon: "mdi-phone", route: "/contact-us" },
      { title: "FAQ", icon: "mdi-chat", route: "/FAQ" }
    ],
    owner: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com"
    }
  }),
  props: ["drawer"],
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
            name: "Dashboard"
          });
        });
    }
  }
};
</script>