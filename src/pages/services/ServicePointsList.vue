<template>
  <section>
    <points-filter @change-filter="setFilters"></points-filter>
  </section>
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
import PointsFilter from '../../components/services/PointsFilter.vue';

export default {
  components: {
    PointItem,
    PointsFilter,
  },
  data() {
    return {
      activeFilters: {}
    };
  },
  computed: {
    filteredServicePoints() {
      const points = this.$store.getters['services/servicePoints'];
      return points.filter(point => {
         if (this.activeFilters.lodz && point.cities.includes('lodz')) {
          return true;
        }
        if (this.activeFilters.poznan && point.cities.includes('poznan')) {
          return true;
        }
        if (this.activeFilters.krakow && point.cities.includes('krakow')) {
          return true;
        }
        if (this.activeFilters.warszawa && point.cities.includes('warszawa')) {
          return true;
        }
        return false;
      });
    },
    // test() {
    //   const points = this.$store.getters['services/servicePoints'];
    //   return points.filter(point => {
    //     for (const key in this.activeFilters) {
    //       console.log(`${key}: ${this.activeFilters[key]}`);
    //       if (this.activeFilters[key] && point.cities.includes(`${key}`)) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //     this.activeFilters.filter(key => {

    //     })
    //     if (this.activeFilters.lodz && point.cities.includes('lodz')) {
    //       return true;
    //     }
    //     if (this.activeFilters.poznan && point.cities.includes('poznan')) {
    //       return true;
    //     }
    //     if (this.activeFilters.krakow && point.cities.includes('krakow')) {
    //       return true;
    //     }
    //     if (this.activeFilters.warszawa && point.cities.includes('warszawa')) {
    //       return true;
    //     }
    //     return false;
    //   });
    // },
    hasServicePoints() {
      return this.$store.getters['services/hasServicePoints'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    prepareFilters() {
      const cities = [...this.$store.getters['services/availableCities']];
      this.activeFilters = cities.reduce((o, key) => ({ ...o, [key]: true}), {})
    },
  },
  created() {
    this.prepareFilters();
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