import { createRouter, createWebHistory } from 'vue-router';

import ServicesList from './components/pages/services/ServicesList.vue';
import UserServices from './components/pages/user/UserServices.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/services' },
    { path: '/services', component: ServicesList },
    { path: '/userservices', component: UserServices },
  ],
});

export default router;
