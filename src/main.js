import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseButton from './components/UI/BaseButton.vue'

import router from './router.js';
import store from './store/index.js';

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

// import '@aws-amplify/ui-vue/styles.css';
// import { Authenticator } from '@aws-amplify/ui-vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VCalendar, {});
// app.use(Authenticator);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.mount('#app');
