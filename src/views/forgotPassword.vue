<template>
  <v-app>
    <div id="main">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-img class="text-center">
                        <img src="../assets/logo.png" alt />
                      </v-img>
                      <v-card-text class="mt-12">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <h1
                          class="text-center white--text text--accent-3 font-weight-medium display-1"
                        >Enter your email address to reset your password</h1>
                        <div class="text-center my-4">
                          <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            @submit.prevent="submit"
                          >
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3"
                              autofocus
                              required
                              :rules="emailRules"
                              v-model="form.email"
                            ></v-text-field>
                          </v-form>
                        </div>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark @click="validate">Reset password</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
// import firebase from "firebase";

export default {
  name: "forgot_Password",
  data() {
    return {
      form: {
        email: ""
      },
      valid: true,
      error: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  }
  // methods: {
  //   submit() {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(this.form.email, this.form.password)
  //       .then(data => {
  //         this.$router.replace({ name: "Home" });
  //       })
  //       .catch(err => {
  //         this.error = err.message;
  //       });
  //   }
  // },
};
</script>