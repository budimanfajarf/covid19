import Global from './Global.vue';
import Country from './Country.vue';

export default [
  { 
    name: 'index',
    path: '/', 
    component: Global,
  },
  { 
    name: 'country',
    path: '/country', 
    component: Country,
  },  
];