<template>
  <base-card>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </base-card>
  <service-form v-if="this.service" :passCities="this.cities" :price="price"></service-form>
</template>

<script>
import ServiceForm from '@/components/services/ServiceForm.vue';

export default {
  props: ['id', 'serviceId'],
  data() {
    return {
      service: null,
      cities: null,
    };
  },
  components: {
    ServiceForm,
  },
  computed: {
    name() {
      return this.service.serviceName;
    },
    description() {
      return this.service.description;
    },
    price() {
      return this.service.price;
    },
  },
  methods: {
    getService() {
      const selectedPoint = this.$store.getters['services/servicePoints'].find(point => point.idPoint === this.id);
      this.cities = selectedPoint.cities;
      const serviceArray = selectedPoint.services.filter(service => service.id === this.serviceId);
      this.service = serviceArray[0];
    }
  },
  created() {
    this.getService();
  }
}
</script>