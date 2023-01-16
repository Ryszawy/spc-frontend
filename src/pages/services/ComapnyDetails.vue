<template>
  <section>
    <base-card>
      <h2>{{ name }}</h2>
      <base-badge v-for="city in cities" :key="city.name" :type="city.name" :title="city.name"></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <h1>Add service to company</h1>
      <base-button @click="addButton()">Add service to company</base-button>
    </base-card>
  </section>
  <section v-if="this.tootle">
    <base-card>
      <ul>
        <service-item v-for="service in canAdd" :key="service.serviceId" :id="service.serviceId" :name="service.name"
          :price="service.price">
        </service-item>
      </ul>
    </base-card>
  </section>
  <section>
    <base-card>
      <h1>Company Services</h1>
    </base-card>
  </section>
  <section>
    <base-card>
      <ul>
        <li v-for="service in selectedPoint" :key="service.serviceId">
          <h3>{{ service.name }}</h3>
          <h4>{{ service.price }}/$</h4>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<script>
const axios = require('axios');

import ServiceItem from '@/components/services/ServiceItem.vue';

export default {
  props: ['id'],
  components: {
    ServiceItem,
  },
  data() {
    return {
      selectedPoint: null,
      name: null,
      cities: [],
      serviceName: '',
      price: '',
      canAdd: [],
      tootle: false
    };
  },
  methods: {
    addButton() {
      this.tootle = !this.tootle
    }
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

    axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services`)
      .then((response) => {
        this.canAdd = response.data;
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

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>