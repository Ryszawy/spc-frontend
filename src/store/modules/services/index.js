import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      availableCities: ['lodz', 'poznan', 'krakow', 'warszawa'],
      servicePoints: [
        {
          idPoint: '1',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: '4',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ],
          disabledDates: [
            {
              start: new Date(2023, 0, 6),
              end: new Date(2023, 0, 6),
            },
            {
              start: new Date(2023, 0, 8),
              end: new Date(2023, 0, 8)
            }
          ]
        }, 
        {
          idPoint: '2',
          servicePointName: 'ServicePoint 2',
          descriptionPoint: 'This is ServicePoint 2',
          cities: ['poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_2',
              description: 'This is service 1 by servicepoint 2',
              price: 200,
            },
          ]
        },
        {
          idPoint: '3',
          servicePointName: 'ServicePoint 3',
          descriptionPoint: 'This is ServicePoint 3',
          cities: ['krakow'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_3',
              description: 'This is service 1 by servicepoint 3',
              price: 300,
            },
            {
              id: '4',
              serviceName: 'Service 2_3',
              description: 'This is service 2 by servicepoint 3',
              price: 500,
            }
          ]
        },
        {
          idPoint: '6',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: '4',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ],
          disabledDates: [
            {
              start: new Date(2023, 0, 6),
              end: new Date(2023, 0, 6),
            },
            {
              start: new Date(2023, 0, 8),
              end: new Date(2023, 0, 8)
            }
          ]
        }, 
        {
          idPoint: '11',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: '4',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ],
          disabledDates: [
            {
              start: new Date(2023, 0, 6),
              end: new Date(2023, 0, 6),
            },
            {
              start: new Date(2023, 0, 8),
              end: new Date(2023, 0, 8)
            }
          ]
        }, 
        {
          idPoint: '5',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: '4',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ],
          disabledDates: [
            {
              start: new Date(2023, 0, 6),
              end: new Date(2023, 0, 6),
            },
            {
              start: new Date(2023, 0, 8),
              end: new Date(2023, 0, 8)
            }
          ]
        }, 
        {
          idPoint: '4',
          servicePointName: 'ServicePoint 1',
          descriptionPoint: 'This is ServicePoint 1',
          cities: ['lodz', 'poznan'],
          services: [
            {
              id: '3',
              serviceName: 'Service 1_1',
              description: 'This is service 1 by servicepoint 1',
              price: 100,
            },
            {
              id: '4',
              serviceName: 'Service 2_1',
              description: 'This is service 2 by servicepoint 1',
              price: 700,
            }
          ],
          disabledDates: [
            {
              start: new Date(2023, 0, 6),
              end: new Date(2023, 0, 6),
            },
            {
              start: new Date(2023, 0, 8),
              end: new Date(2023, 0, 8)
            }
          ]
        }, 
      ],
    };
  },
  mutations,
  actions,
  getters,
};
