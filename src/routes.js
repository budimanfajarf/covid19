// src/routes.js
 
module.exports = [
  {
      path: '/',
      name: 'Global',
      component: () => import(/* webpackChunkName: "home" */ './Global')
  },
  {
      path: '/country',
      name: 'Country',
      component: () => import(/* webpackChunkName: "about" */ './Country')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ './NotFound')
  },  
]