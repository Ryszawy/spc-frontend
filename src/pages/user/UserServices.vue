<template>
  <section>
    <base-card>
      <header>
        <h2>My orders</h2>
      </header>
      <ul v-if="hasOrders">
        <order-item v-for="order in orderedServices" :key="order.id"
        :pointId="order.servicePointId" 
        :serviceId="order.serviceId"
        :date="order.date"></order-item>
      </ul>
      <h3 v-else>You haven't ordered any services yet!</h3>
    </base-card>
  </section>
</template>

<script>
import OrderItem from '../../components/orders/OrderItem.vue';

export default {
  components: {
    OrderItem,
  },
  computed: {
    orderedServices() {
      return this.$store.getters['orders/orders'];
    },
    hasOrders() {
      return this.$store.getters['orders/hasOrders'];
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>