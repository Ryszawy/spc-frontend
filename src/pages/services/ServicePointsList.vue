<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
    </div>
    <ul v-if="hasServicePoints">
      <point-item 
        v-for="point in filteredServicePoints" 
        :key="point.idPoint" 
        :id="point.idPoint"
        :name="point.servicePointName"
        :description="point.descriptionPoint"
        :cities="point.cities"
        >
      </point-item>
    </ul>
    <h3 v-else>No points found</h3>
  </section>
</template>

<script>
import PointItem from '../../components/services/PointItem.vue';

export default {
  components: {
    PointItem,
  },
  computed: {
    filteredServicePoints() {
      return this.$store.getters['services/servicePoints'];
    },
    hasServicePoints() {
      return this.$store.getters['services/hasServicePoints'];
    },
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