import { createRouter, createWebHistory } from 'vue-router';

import ServicePointsList from './pages/services/ServicePointsList.vue'
import UserServices from './pages/user/UserServices.vue';
import ServicePointDetail from './pages/services/ServicePointDetail.vue';
import OrderService from './pages/services/OrderService.vue';
import LoginPage from './pages/LoginPage.vue'
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/servicesPoint' },
    { path: '/servicesPoint', component: ServicePointsList },
    { path: '/servicesPoint/:id', component: ServicePointDetail, props: true },
    { path: '/servicesPoint/:id/:serviceId', component: OrderService, props: true },  //servicesPoint/sp1/p1s1
    { path: '/userServices', component: UserServices },
    { path: '/login', component: LoginPage },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
