import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';

import homeRoutes from './home/router';
import newHouseRoutes from './newhouse/router';
import oldHouseRoutes from './oldhouse/router';
import informationRoutes from './information/router';
import adviserRoutes from './adviser/router';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'home' },
    children: [
      ...homeRoutes,
      ...newHouseRoutes,
      ...oldHouseRoutes,
      ...informationRoutes,
      ...adviserRoutes
    ]
  }
];

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});