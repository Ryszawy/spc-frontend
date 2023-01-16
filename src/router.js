import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/LoginPage.vue';
import NotFound from './pages/NotFound.vue';
import AdminPage from '@/pages/admin/AdminPage.vue'
import AddCompany from '@/pages/admin/AddCompany.vue';
import ServicePointDetail from './pages/services/ComapnyDetails.vue';
import AddService from '@/pages/services/AddService.vue';
// import AdminView from '@/pages/admin/AdminView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/admin' },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage,
      props: true,
    },
    {
      path: '/admin/addCompany',
      name: 'AddCompany',
      component: AddCompany,
      props: true,
    },
    {
      path: '/admin/addService',
      name: 'AddService',
      component: AddService,
      props: true,
    },
    { path: '/admin/:id', component: ServicePointDetail, props: true },
    { path: '/login', component: LoginPage },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
