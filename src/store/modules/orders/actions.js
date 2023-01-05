export default {
  submitOrder(context, payload) {
    const newOrder = {
      id: new Date().toISOString(),
      userId: payload.userId,
      servicePointId: payload.pointId,
      serviceId: payload.serviceId,
      description: payload.desc,
      city: payload.city,
      date: payload.date,
    };
    context.commit('addOrder', newOrder);
  }
};
