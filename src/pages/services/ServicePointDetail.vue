<template>
  <section>
    <base-card>
      <h2>{{ name }}</h2>
      <base-badge v-for="city in cities" :key="city.name" :type="city.name" :title="city.name"></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <service-filter @minValue="setMin" @maxValue="setMax" @serviceName="setText"></service-filter>
    </base-card>
  </section>
  <section>
    <base-card>
      <ul>
        <service-item v-for="service in selectedPoint" 
          :key="service.serviceId" 
          :id="service.serviceId" 
          :name="service.name"
          :price="service.price">
        </service-item> 
      </ul>
       <!-- <p v-else>There are no services</p> -->
    </base-card>
  </section>
</template>

<script>
const axios = require('axios');

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
      name: null,
      cities: [],
      min: 0,
      max: 1000,
      text: '',
    };
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
    },
  },
  mounted() {
    axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services/companies/${this.$props.id}`)
      .then((response) => {
        this.name = response.data.companyName;
        this.selectedPoint = response.data.services;
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/companies/${this.$props.id}/cities`)
      .then((response) => {
        this.cities = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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