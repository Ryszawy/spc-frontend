<template>
  <section class="header">
    <base-card class="text">
      <h1>Admin Panel</h1>
    </base-card>
  </section>
  <section v-if="myCompany.name === ''">
    <base-card class="button">
      <base-button link to="/admin/addCompany">Add company</base-button>
    </base-card>
  </section>
  <section v-else>
    <base-card class="text">
      <h3>{{ myCompany.name }}</h3>
    </base-card>

    <!-- <base-card class="text">
      <label>Capacity</label>
      <h3>{{ capacity }}</h3>
    </base-card> -->

    <base-card class="text">
      <label>Cities</label>
      <div>
        <base-badge v-for="city in cities" :key="city" :type="city" :title="city"></base-badge>
      </div>
    </base-card>
    <!-- <base-card>
      <div class="form-control" v-if="hasCities">
        <label for="city-picker">Pick a city</label>
        <div v-for="city in cities" :key="city">
          <input type="checkbox" :id="city" :value="city" v-model="pickedCity" />
          <base-badge :type="city" :title="city"></base-badge>
        </div>
      </div>
      <div class="form-control">
        <label for="services">Working capability</label>
        <div class="input-group">
          <input type="number" placeholder="Capability" v-model.number="capability" />
        </div>
      </div>
    </base-card> -->

    <base-card>
      <div class="form-control">
        <label for="services">Add services</label>
        <div class="input-group">
          <input type="text" placeholder="Service name" v-model.trim="serviceName" />
          <input type="number" placeholder="price" v-model.number="price" />
        </div>
        <div class="button-control">
          <base-button @click="addService()">Add</base-button>
        </div>
      </div>
      <div class="text">
        <h3>Services</h3>
      </div>
      <ul>
        <li v-for="service in services" :key="service.serviceName">
          <div class="center">
            <h3>{{ service.serviceName }}</h3>
            <h4>{{ service.price }}/$</h4>
            <div class="button-control">
              <base-button>Delete</base-button>
            </div>
          </div>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<script>
const axios = require('axios').default;

export default {
  data() {
    return {
      // myCompany: null,
      companiesGET: null,
      myCompany: {
        name: 'eo',
      },
      services: [
        {
          serviceName: 'elo',
          price: 30,
        },
        {
          serviceName: 'elo1',
          price: 40,
        }
      ],
      capacity: 10,
      cities: ['niewiem', 'elo'],

      serviceName: '',
      price: '',
    }
  },
  methods: {
    remove(name) {
      this.services = this.services.filter(service => {
        return service.serviceName != name;
      });
    },
    addService() {
      const service = {
        serviceName: this.serviceName,
        price: this.price,
      }
      this.services.push(service);
      this.serviceName = '';
      this.price = '';
    },
    addServices() {
      this.services.forEach(service => {
        axios.post('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services', {
          name: service.serviceName,
          price: service.price,
        }).then((response) => {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      });
    },
    findId() {
      this.findCompany = this.companiesGET.find(company => {
        return company.name === this.name;
      });
      this.findCompany = this.findCompany.id;
    },
  },
  computed: {
    hasServices() {
      return this.services && this.services.length > 0
    },
    hasCities() {
      return this.cities && this.cities.length > 0
    },
  },
  // mounted() {
  //   axios.get('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/companies')
  //     .then((response) => {
  //       this.companiesGET = response.data
  //       console.log(response)
  //       this.findId();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
}
</script>

<style scoped>
.center,
.text {
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

.button-control {
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>