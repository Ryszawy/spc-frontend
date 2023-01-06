<template>
  <base-card>
    <h2>Find Your ServicePoint</h2>
    <span class="filter-option" v-for="city in cities" :key="city">
      <input type="checkbox" :id="city" checked @change="setFilter" />
      <label :for="city">{{ city.toUpperCase() }}</label>
    </span>
  </base-card>
</template>

<script>
const axios = require('axios');

export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: null,
      cities: [],
    };
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
    removeDuplicates(arr) {
      const companyCities = arr.map(city => city.name);
      return [...new Set(companyCities)];
    }
  },
  mounted() {
    axios.get('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/cities')
      .then((response) => {
        this.cities = this.removeDuplicates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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