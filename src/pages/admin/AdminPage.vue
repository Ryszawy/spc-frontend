<template>
  <section>
    <base-card class="text">
      <h1>Admin Panel</h1>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button link to="/login">Sign out</base-button>
        <base-button link to="/admin/addService">Add Service</base-button>
        <base-button link to="/admin/addCompany">Add Company</base-button>
      </div>
      <ul v-if="hasServicePoints">
        <point-item v-for="point in fetchData" 
          :key="point.id" 
          :id="point.id" 
          :name="point.name"
          :cities="getCitiesForCompany(point.id)">
        </point-item>
      </ul>
      <h3 v-else>No points found</h3>
    </base-card>
  </section>
</template>

<script>
const axios = require('axios').default;
import PointItem from '../../components/services/PointItem.vue';

export default {
  data() {
    return {
      fetchData: [],
      cities: [],
    };
  },
  components: {
    PointItem,
  },
  computed: {
    hasServicePoints() {
      return this.fetchData && this.fetchData.length > 0;
    },
  },
  methods: {
    getCitiesForCompany(id) {
      const companyCitiesObj = this.cities.filter(city => {
        if (city.companyId === id) {
          return city.name;
        }
      });
      const companyCities = companyCitiesObj.map(city => city.name);
      return companyCities;
    },
  },
  mounted() {
    axios.get('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/companies')
      .then((response) => {
        this.fetchData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      axios.get('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/cities')
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