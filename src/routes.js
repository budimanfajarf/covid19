// src/routes.js
 
module.exports = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Global" */ './Global')
  },
  {
    path: '/country',
    name: 'Country',
    component: () => import(/* webpackChunkName: "Country" */ './Country')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ './NotFound')
  },  
]