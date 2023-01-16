import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseButton from './components/UI/BaseButton.vue'

import router from './router.js';
import store from './store/index.js';

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import AmplifyVue from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App);
Amplify.configure(awsconfig);

app.use(router);
app.use(store);
app.use(VCalendar, {});
app.use(AmplifyVue);
app.use(VueSweetalert2);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.mount('#app');
