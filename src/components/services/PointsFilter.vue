<template>
  <base-card>
    <h2>Find Your ServicePoint</h2>
    <span class="filter-option" 
      v-for="city in getCities"
      :key="city"
      >
      <input type="checkbox" :id="city" checked @change="setFilter"/>
      <label :for="city">{{ city.toUpperCase() }}</label> 
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: null,
    };
  },
  computed: {
    getCities() {
      return this.$store.getters['services/availableCities'];
    },
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
    prepareFilters() {
      const cities = [...this.$store.getters['services/availableCities']];
      this.filters = cities.reduce((o, key) => ({ ...o, [key]: true}), {});
    }
  },
  created() {
    this.prepareFilters();
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>