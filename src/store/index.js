import { createStore } from 'vuex';

import servicesModule from './modules/services.js';

const store = createStore({
  modules: {
    services: servicesModule,
  },
});

export default store;
