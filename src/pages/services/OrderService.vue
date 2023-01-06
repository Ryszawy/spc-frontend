<template>
  <base-card>
    <h2>{{ name }}</h2>
  </base-card>
  <service-form :passCities="cities" :price="price"></service-form>
</template>

<script>
const axios = require('axios').default;

import ServiceForm from '@/components/services/ServiceForm.vue';

export default {
  props: ['id', 'serviceId'],
  data() {
    return {
      name: null,
      price: null,
      cities: null,
    };
  },
  components: {
    ServiceForm,
  },
  mounted() {
    axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services/${this.$props.serviceId}`)
      .then((response) => {
        this.name = response.data.name;
        this.price = response.data.price;
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