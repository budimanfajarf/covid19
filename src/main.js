import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, /* IconsPlugin */ } from 'bootstrap-vue';
import routes from './routes.js';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  template: '<App/>',
  components: { App }  
}).$mount('#app');
