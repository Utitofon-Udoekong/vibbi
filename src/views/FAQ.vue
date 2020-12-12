<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <h1 class="text-center display-3 mb-5" >FAQ's</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(text,i) in texts" :key="i">
          <v-expansion-panel-header>
            <h1 class="font-weight-medium">{{ text.title }}</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <h3 class="my-4 font-weight-medium">{{ text.answer }}</h3>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      texts: [
        { title: "What can i do with Vibbi", answer: "Vibbi is a social platform where users can easily register their presence as online video content creators." },
        { title: "Who are my targeted audience", answer: "Vibbi provides you with an easy means of reaching over 7 billion digitally connected users" },
        { title: "Who are the partners of vibbi", answer: "vibbi partners with top groups like facebook, Amazon, linkedIn etc, to reach a crowd of targeted audience" },
        { title: "How do i access my account", answer: "You will only access your dashboard after completing registration with us" },
        { title: "Is there a pricing plan", answer: "Vibbi can also be a marketplace for you, and thats where the pricing comes in. Our sales and adverts analysis algorithm helps to adveertise and market your contents." },
        { title: "How do i start", answer: `You can start by registering with us` }
      ],
    };
  }
};
</script>