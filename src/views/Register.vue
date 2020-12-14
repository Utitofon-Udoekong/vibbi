<template>
  <v-app>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-window>
                <v-window-item>
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-2">Welcome Back!</h1>
                        <h4 class="text-center">Please login to connect with your account</h4>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark router :to="`/Login`">Sign In</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-img class="text-center">
                        <img src="../assets/logo.png" alt />
                      </v-img>
                      <v-card-text class="mt-4">
                        <h1 class="text-center display-2 teal-text text--accent-3">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Enter your email</h4>

                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="mdi-account-circle"
                            type="text"
                            color="teal accent-3"
                            v-model="form.username"
                            :rules="usernameRules"
                            required
                            autofocus
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                            v-model="form.email"
                            :rules="emailRules"
                            required
                          />
                          <v-text-field
                            label="Password"
                            name="Password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                            v-model="form.password"
                            :rules="password2Rules"
                            required
                          />
                          <v-text-field
                            label="Confirm Password"
                            name="Confirm Password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                            v-model="form.password"
                            :rules="password2Rules"
                            required
                            disabled
                          />
                          <v-checkbox
                            v-model="agreement"
                            :rules="checkboxRules"
                            color="deep-purple"
                          >
                            <template v-slot:label>
                              I agree to the&nbsp;
                              <a
                                href="#"
                                @click.stop.prevent="dialog = true"
                              >Terms of Service</a>
                              &nbsp;and&nbsp;
                              <a
                                href="#"
                                @click.stop.prevent="dialog = true"
                              >Privacy Policy</a>*
                            </template>
                          </v-checkbox>
                          <v-dialog v-model="dialog" absolute max-width="400" persistent>
                            <v-card>
                              <v-card-title class="headline grey lighten-3">Legal</v-card-title>
                              <v-card-text>We collect some data and share with third party</v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                <v-btn text @click="agreement = false, dialog = false">No</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  class="white--text"
                                  color="deep-purple accent-4"
                                  @click="agreement = true, dialog = false"
                                >Yes</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark @click="submit">Sign Up</v-btn>
                      </div>
                      <h3>{{ error }}</h3>
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
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      agreement: false,
      error: null,
      valid: true,
      dialog: false,
      usernameRules: [
        v => !!v || "Name is required",
        v => (v && v.length > 3) || "Name must be greater than 3 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password2Rules: [
        v => !!v || "password is required",
        v =>
          (v && v.length >= 6) || "password must be greater than 6 characters",
        v =>
          /[^A-Za-z0-9]/.test(v) ||
          "password must have a special character e.g @",
        v => /[0-9]/.test(v) || "password must contain a number",
        v => /[A-Z]/.test(v) || "password must contain a capital letter"
      ]
      // checkboxRules: [v => !!v || "This field is required"]
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              this.$router.replace({ name: "Login" });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    validate() {
      this.$refs.form.validate();
      this.$refs.form.reset();
    }
  }
};
</script>