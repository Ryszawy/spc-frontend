export default {
  orders(state) {
    return state.myServices;
  },
  hasOrders(state) {
    return state.myServices && state.myServices.length > 0;
  }
};
