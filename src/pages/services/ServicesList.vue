<template>
  <div>
    <section>
      <base-card>
        <ul v-if="hasServices">
          <service-item 
            v-for="service in filteredServices"
            :key="service.id" 
            :service-name="service.serviceName"
          ></service-item>
        </ul>
      </base-card>
    </section>
  </div>
</template>

<script>
import ServiceItem from '@/components/services/ServiceItem.vue';

export default {
  components: {
    ServiceItem,
  },
  computed: {
    filteredServices() {
      return this.$store.getters['services/services'];
    },
    hasServices() {
      return this.$store.getters['services/hasServices'];
    }
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