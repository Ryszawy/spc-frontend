<template>
  <section>
    <base-card>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <base-badge v-for="city in cities" :key="city" :type="city" :title="city"></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <service-filter @minValue="setMin" @maxValue="setMax" @serviceName="setText"></service-filter>
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
        <p v-if="services.length === 0">There are no services</p>
      </ul>
      <p v-else>There are no services</p>
    </base-card>
  </section>
</template>

<script>
import ServiceItem from '@/components/services/ServiceItem.vue';
import ServiceFilter from '@/components/services/ServiceFilter.vue';

export default {
  props: ['id'],
  components: {
    ServiceItem,
    ServiceFilter,
  },
  data() {
    return {
      selectedPoint: null,
      min: 0,
      max: 1000,
      text: '',
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
      const services = this.selectedPoint.services;
      return services.filter(service => {
        if (service.price >= this.min && service.price <= this.max && service.serviceName.toLowerCase().includes(this.text.toLowerCase())) {
          return true;
        }
        return false;
      });
    },
    hasServices() {
      return this.selectedPoint.services && this.selectedPoint.services.length > 0;
    }
  },
  methods: {
    setMin(min) {
      this.min = min;
    },
    setMax(max) {
      this.max = max;
    },
    setText(name) {
      this.text = name;
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