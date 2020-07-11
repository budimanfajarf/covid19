import routes from './routes.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Skeleton from 'vue-loading-skeleton'; 
import { BootstrapVue, /* IconsPlugin */ } from 'bootstrap-vue';
import vSelect from 'vue-select';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-select/dist/vue-select.css';
import './assets/css/style.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(Skeleton);
Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

Vue.component('v-select', vSelect);

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
  base: process.env.BASE_URL,
});

new Vue({
  router,
  template: '<App/>',
  components: { App }  
}).$mount('#app');
