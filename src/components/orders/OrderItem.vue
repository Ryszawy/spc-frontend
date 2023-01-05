<template>
  <li>
    <div>
      <p>{{ pointName }}</p>
    </div>
    <div>
      <p>{{ serviceName }}</p>
    </div>
    <div>
      <p>{{ date }}</p>
    </div>
    <div>
      <p>{{ price }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['pointId', 'serviceId', 'date'],
  data() {
    return {
      pointName: null,
      serviceName: null,
      price: null,
    }
  },
  methods: {
    loadData() {
      const selectedPoint = this.$store.getters['services/servicePoints'].find(point => point.idPoint === this.pointId);
      this.pointName = selectedPoint.servicePointName;
      const services = selectedPoint.services;
      const selectedService = services.find(service => service.id === this.serviceId);
      this.selectedPoint = selectedService.serviceName;
      this.price = selectedService.price;
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
