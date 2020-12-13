<template>
  <v-main>
    <v-container>
      <v-row>
        <template v-for="category in categories" class="mb-5">
          <v-col :key="category.title" class="mt-2" cols="12">
            <h1 class="pa-2 white--text">{{ category.title }}</h1>
          </v-col>

          <v-col cols="12" sm="6" md="4" v-for="j in 9" :key="`${category}${j}`">
            <v-card class="fill-height" fluid>
              <v-card width="fill-width">
                <v-img
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="150px"
                  src="../assets/images/demo-img.jpg"
                >
                  <v-card-title></v-card-title>
                </v-img>
                <v-card-actions>
                  <!-- watch video button -->
                  <v-btn @click="openVideo">Watch Video</v-btn>
                  <v-spacer></v-spacer>
                  <!-- video action buttons -->
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mr-2" icon color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon small>mdi-emoticon-excited-outline</v-icon>
                      </v-btn>
                    </template>
                    <span>Like</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mr-2" icon color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon small>mdi-bookmark</v-icon>
                      </v-btn>
                    </template>
                    <span>Subscribe</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="mr-2" icon color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon small>mdi-share-variant</v-icon>
                      </v-btn>
                    </template>
                    <span>Share</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
              <v-card-title class="align-end d-flex" align-center>
                <v-btn icon x-large v-on="on" class="mr-3" router :to="`/dashboard`">
                  <v-avatar color="brown" size="48">
                    <img src="../assets/images/user.png" alt />
                  </v-avatar>
                </v-btn>
                <v-card-title>
                  <h4>User</h4>
                </v-card-title>
              </v-card-title>
            </v-card>
          </v-col>
        </template>
      </v-row>

      <!-- video -->
      <v-row align="center" justify="center">
        <v-overlay :value="videoOverlay">
          <div class="text-center">
            <v-progress-circular indeterminate size="64" v-if="videoOverlaybtn"></v-progress-circular>
            <v-dialog v-model="dialog">
              <v-btn pink large fab absolute style="top: 0px; right: 10px;" @click="closeVideo">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
              <v-card v-if="!videoOverlaybtn" class="d-flex justify-space-between .flex-sm-column">
                <v-card class="mx-auto my-12" width="700" relative>
                  <video controls autoplay loop width="100%" height="100%">
                    <!-- <source src="../assets/video/login-bg.mp4" type="video/mp4" /> -->
                  </video>
                </v-card>
                <v-card :loading="loading" class="my-12 mx-auto" max-width="374">
                  <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                  </template>
                  <v-card-title>{{ category.title }}</v-card-title>
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                      <div class="grey--text ml-4">4.5 (413)</div>
                    </v-row>
                    <div class="my-4 subtitle-1">Video by User</div>
                    <div>Waterfalls</div>
                  </v-card-text>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-title>Related Videos</v-card-title>
                  <v-card-text>
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>Dance</v-chip>

                      <v-chip>Music</v-chip>

                      <v-chip>Hip-hop</v-chip>

                      <v-chip>RnB</v-chip>
                    </v-chip-group>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-dialog>
          </div>
        </v-overlay>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: "categoryMain",
  data: () => ({
    videoOverlay: false,
    videoOverlaybtn: true,
    dialog: false,
    loading: false,
    selection: 1,
    categories: [
      { title: "Hip-Hop" },
      { title: "Drama" },
      { title: "Gaming" },
      { title: "News" },
      { title: "Nigerian" },
      { title: "Foreign" },
      { title: "Netflix" }
    ]
  }),
  methods: {
    openVideo(){
      this.videoOverlay = !this.videoOverlay
    },
    closeVideo() {
      this.videoOverlay = false;
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  watch: {
    videoOverlay(val) {
      val &&
        setTimeout(() => {
          this.videoOverlaybtn = false;
          this.dialog = true;
        }, 3000);
    }
  }
};
</script>