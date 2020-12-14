import Vue from 'vue'
import vuetify from "./plugins/vuetify"
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import store from "./store/index";
import LoadScript from 'vue-plugin-load-script';


const firebaseConfig = {
  apiKey: "AIzaSyBcpJGK5YivwE0KNo0mD7xkm_Hh2Q6o5wA",
  authDomain: "userinfos-fb1ba.firebaseapp.com",
  projectId: "userinfos-fb1ba",
  storageBucket: "userinfos-fb1ba.appspot.com",
  messagingSenderId: "1008233912347",
  appId: "1:1008233912347:web:9898e5d97b93797a0500be"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


Vue.use(LoadScript);


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

