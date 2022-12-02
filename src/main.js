import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

import router from './router.js';
import store from './store/index.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);

app.mount('#app');
