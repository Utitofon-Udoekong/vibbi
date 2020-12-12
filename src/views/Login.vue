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
                    <v-col cols="12" md="8">
                      <v-img class="text-center">
                        <img src="../assets/logo.png" alt />
                      </v-img>
                      <v-card-text class="mt-4">
                        <h1
                          class="text-center display-2 white--text text--accent-3"
                        >Sign in to Vibbi</h1>
                        <div class="text-center my-4">
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                          <h4 class="text-center mt-4">Ensure your details are correct</h4>
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
                            <v-text-field
                              label="Password"
                              name="Password"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="teal accent-3"
                              required
                              :rules="passwordRules"
                              v-model="form.password"
                            ></v-text-field>
                          </v-form>
                          <router-link to="/forgot-Password">
                            <h3 class="text-center mt-3 font-weight-medium">Forgot password?</h3>
                          </router-link>
                        </div>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          dark
                          @click="submit"
                        >Sign In</v-btn>
                      </div>
                      <v-snackbar v-model="snackbar" :timeout="timeout">
                        {{ error }}
                        <template v-slot:action="{ attrs }">
                          <v-btn color="teal accent-4" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                        </template>
                      </v-snackbar>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-2">Hello, there</h1>
                        <h3 class="text-center">Enter your personal details here</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark router :to="`/Register`">Sign Up</v-btn>
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
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      valid: true,
      error: null,
      snackbar: false,
      timeout: 5000,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "password is required",
        v =>
          (v && v.length >= 6) || "password must be greater than 6 characters",
        v =>
          /[^A-Za-z0-9]/.test(v) ||
          "password must have a special character e.g @",
        v => /[0-9]/.test(v) || "password must contain a number",
        v => /[A-Z]/.test(v) || "password must contain a capital letter"
      ]
    };
  },
  methods: {
    submit() {
      this.snackbar = true,
      this.$refs.form.reset(),
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>