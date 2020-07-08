import Global from './components/Global.vue';
import Country from './components/Country.vue';

export default [
  { 
    name: 'index',
    path: '/', 
    component: Global 
  },
  { 
    name: 'country',
    path: '/country', 
    component: Country 
  },  
];