import { createStore } from 'vuex';

import servicesModule from './modules/services/index.js';

const store = createStore({
  modules: {
    services: servicesModule,
  },
});

export default store;
