<template>
  <section>
    <base-card>
      <h1>Add Service</h1>
    </base-card>
  </section>
  <base-card>
    <div class="form-control">
      <label for="services">Add services</label>
      <div class="input-group">
        <input type="text" placeholder="Service name" v-model.trim="serviceName" />
        <input type="text" placeholder="price" v-model.trim="price" />
      </div>
      <div class="button-control">
        <base-button @click="addNewService()">Add</base-button>
      </div>
    </div>
  </base-card>
  <section v-if="hasServices">
    <base-card>
      <ul v-for="service in services" :key="service.id">
        <li>
          <h3>{{ service.name }}</h3>
          <h4>{{ service.price }}/$</h4>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<script>
import ServiceItem from '@/components/services/ServiceItem.vue';
const axios = require('axios').default;

export default {
  props: ['id'],
  component: {
    ServiceItem,
  },
  data() {
    return {
      serviceName: '',
      price: '',
      services: []
    };
  },
  methods: {
    addNewService() {
      axios.post('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services', {
        name: this.serviceName,
        price: this.price,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  computed: {
    hasServices() {
      return this.services && this.services.length > 0;
    }
  },
  mounted() {
    axios.get('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services')
      .then((response) => {
        this.services = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.button-control {
  display: flex;
  justify-content: center;
}

.input-group {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

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


label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>