export default {
  servicePoints(state) {
    return state.servicePoints;
  },
  hasServicePoints(state) {
    return state.servicePoints && state.servicePoints.length > 0;
  },
};
