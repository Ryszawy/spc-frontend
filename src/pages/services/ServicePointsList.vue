<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/login">Login</base-button>
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
    </base-card>
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
.controls {
  display: flex;
  justify-content: space-between;
}
</style>