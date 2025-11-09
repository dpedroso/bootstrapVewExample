import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App";
import App2 from "./App2";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({ el: "#app", render: (h) => h(App) });
new Vue({ el: "#app2", render: (h) => h(App2) });
