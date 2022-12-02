import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      services: [
        {
          id: '1',
          serviceName: 'Service 1',
          description: 'This is Service 1',
          price: 300,
          city: 'lodz',
        }, 
        {
          id: '2',
          serviceName: 'Service 2',
          description: 'This is Service 2',
          price: 200,
          city: 'poznan',
        },
        {
          id: '3',
          serviceName: 'Service 3',
          description: 'This is Service 3',
          price: 100,
          city: 'krakow',
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};
