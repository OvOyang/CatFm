import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vueresource from 'vue-resource'
Vue.use(Vueresource)
Vue.http.options.emulateJSON = true
Vue.use(Mint)
import 'mui/css/mui.css'
import 'mui/fonts/mui.ttf'
import'./assets/reset.css'
import './assets/jquery.min.js'
import './assets/animate.css'



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
