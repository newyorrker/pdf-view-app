
import "vue-pdf-app/dist/icons/main.css";
import VuePdfApp from "vue-pdf-app";

import Vue from "vue";
import App from "./App.vue";
import Checkbox from "./components/Checkbox.vue";

Vue.config.productionTip = false;
Vue.component("vue-pdf-app", VuePdfApp);
Vue.component("check-box", Checkbox);

new Vue({
  render: (h) => h(App)
}).$mount("#app");