<template>
  <section>
    <base-card>
      <header>
        <h2>My orders</h2>
      </header>
      <ul v-if="hasOrders">
        <order-item v-for="order in orderedServices" 
          :key="order.description" 
          :companyName="order.companyName"
          :description="order.description" 
          :orderDate="order.orderDate"
          :price="order.price"
          :serviceName="order.serviceName">
        </order-item>
      </ul>
      <h3 v-else>You haven't ordered any services yet!</h3>
    </base-card>
  </section>
</template>

<script>
import OrderItem from '../../components/orders/OrderItem.vue';
import { Auth } from 'aws-amplify';
const axios = require('axios').default;

export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      user: null,
      orderedServices: [],
    }
  },
  computed: {
    hasOrders() {
      return this.orderedServices && this.orderedServices.length > 0;
    },
  },
  mounted() {
    Auth.currentAuthenticatedUser().then(data => {
      this.user = data.username
    }).then(() => {
      axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/users/services?uuid=${this.user}`).then(response => {
        this.orderedServices = response.data;
      });
    });
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