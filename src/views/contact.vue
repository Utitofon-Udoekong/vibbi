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
                      <v-card-text class="mt-12">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <h1 class="text-center display-2 white--text text--accent-3">Contact us on</h1>
                        <div class="text-center my-4">
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                          <h4 class="text-center mt-4 font-weight-medium">or send a direct message</h4>
                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              v-model="name"
                              :rules="nameRules"
                              color="teal accent-3"
                              label="Name"
                              required
                              prepend-icon="mdi-account-circle"
                            ></v-text-field>

                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              color="teal accent-3"
                              label="E-mail"
                              required
                              prepend-icon="mdi-email"
                            ></v-text-field>
                            <v-col cols="12" md="12">
                              <v-textarea
                                clearable
                                clear-icon="mdi-close"
                                label="Message"
                                color="teal accent-3"
                                prepend-icon="mdi-message"
                                auto-grow
                                v-model="message"
                                :rules="messageRules"
                              ></v-textarea>
                            </v-col>
                            <v-btn
                              :disabled="!valid"
                              color="teal accent-3"
                              class="mr-4"
                              @click="validate"
                            >Submit</v-btn>
                          </v-form>
                        </div>
                      </v-card-text>
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

export default {
  name: "contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "This field is required",
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  },
  watch: {
    sendEmail(name, email, message){
      email.send({
        Host: "smtp.gmail.com",
        Username: "utitofonudoekong@gmail.com",
        Password: "app password from gmail",
        To: "utitofonudoekong@gmail.com",
        From: "utitofonudoekong@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name ${name} <br/> Email: ${email} <br/> Message: ${message}`
      }).then(() => alert("message has been successfully sent"))
    }
  }
};
</script>