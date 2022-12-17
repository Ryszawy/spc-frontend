<template>
  <section>
    <base-card>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="city in cities" :key="city" :type="city" :title="city"></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <ul v-if="hasServices">
        <service-item 
          v-for="service in services"
          :key="service.id"
          :id="service.id"
          :name="service.serviceName"
          :description="service.description"
          :price="service.price"
          >
        </service-item>
      </ul>
      <p v-else>There are no services</p>
    </base-card>
  </section>
</template>

<script>
import ServiceItem from '@/components/services/ServiceItem.vue';

export default {
  props: ['id'],
  components: {
    ServiceItem,
  },
  data() {
    return {
      selectedPoint: null,
    };
  },
  computed: {
    name() {
      return this.selectedPoint.servicePointName;
    },
    description() {
      return this.selectedPoint.descriptionPoint;
    },
    cities() {
      return this.selectedPoint.cities;
    },
    services() {
      return this.selectedPoint.services;
    },
    hasServices() {
      return this.selectedPoint.services && this.selectedPoint.services.length > 0;
    }
  },
  created() {
    this.selectedPoint = this.$store.getters['services/servicePoints'].find(point => point.idPoint === this.id);
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>