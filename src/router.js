import { createRouter, createWebHistory } from 'vue-router';

import ServicesList from './pages/services/ServicesList.vue';
import UserServices from './pages/user/UserServices.vue';
import ServiceDetail from './pages/services/ServiceDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/services' },
    { path: '/services', component: ServicesList },
    { path: '/services/:id', component: ServiceDetail },
    { path: '/userservices', component: UserServices },
  ],
});

export default router;
