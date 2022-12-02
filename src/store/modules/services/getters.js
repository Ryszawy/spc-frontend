export default {
  services(state) {
    return state.services;
  },
  hasServices(state) {
    return state.services && state.services.length > 0;
  },
};
