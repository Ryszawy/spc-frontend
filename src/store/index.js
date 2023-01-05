import { createStore } from 'vuex';

import servicesModule from './modules/services/index.js';
import ordersModule from './modules/orders/index.js';

const store = createStore({
  modules: {
    services: servicesModule,
    orders: ordersModule,
  },
  state() {
    return {
      userId: 'user1'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
