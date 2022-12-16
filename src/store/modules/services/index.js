import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      servicePoints: [
        {
          idPoint: 'sp1',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: 'p1s1',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: 'p1s2',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ]
        }, 
        {
          idPoint: 'sp2',
          servicePointName: 'ServicePoint 2',
          descriptionPoint: 'This is ServicePoint 2',
          cities: ['poznan'],
          services: [
            {
              id: 'p2s1',
              serviceName: 'Service 1_2',
              description: 'This is service 1 by servicepoint 2',
              price: 200,
            },
          ]
        },
        {
          idPoint: 'sp3',
          servicePointName: 'ServicePoint 3',
          descriptionPoint: 'This is ServicePoint 3',
          cities: ['krakow'],
          services: [
            {
              id: 'p3s1',
              serviceName: 'Service 1_3',
              description: 'This is service 1 by servicepoint 3',
              price: 300,
            },
            {
              id: 'p3s2',
              serviceName: 'Service 2_3',
              description: 'This is service 2 by servicepoint 3',
              price: 500,
            }
          ]
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};
