<template>
  <base-card>
    <div>
      <div class=actions>
        <v-date-picker mode="date" v-model="date" :disabled-dates="checkDisabledDates" />
      </div>
      <div class="form-control">
        <label for="city-picker">Pick a city</label>
        <div v-for="city in cities" :key="city">
          <input type="radio" :id="city.id" name="city.name" :value="city.id" v-model="pickedCity" />
          <base-badge :type="city.name" :title="city.name"></base-badge>
        </div>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="5" id="message" v-model="description"></textarea>
      </div>
      <div class="price">
        <h2>{{ price }}/$</h2>
      </div>
      <div class=actions>
        <base-button @click="sendOrder()">Order Service</base-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import { Auth } from 'aws-amplify';
import axios from 'axios';
// const axios = require('axios').default;

export default {
  props: ['passCities', 'price'],
  data() {
    return {
      pickedCity: null,
      date: new Date(),
      description: null,
      disabledDates: null,
      user: null,
      cities: [],
      id: null,
    };
  },
  computed: {
    checkDisabledDates() {
      if (this.disabledDates) {
        return this.disabledDates;
      } else {
        return null;
      }
    },
  },
  methods: {
    format() {
      this.date = new Date(this.date);
      let currentDayOfMonth = this.date.getDate();
      let currentMonth = this.date.getMonth() + 1;
      if (currentMonth < 10) {
        currentMonth = "0" + currentMonth;
      }
      if (currentDayOfMonth < 10) {
        currentDayOfMonth = "0" + currentDayOfMonth;
      }
      return this.date.getFullYear() + '-' + currentMonth + '-' + currentDayOfMonth;
    },
    sendOrder() {
      const newDate = this.format()
      axios.post(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/users/services`, {
        user_id: this.id,
        company_id: parseInt(this.$route.params.id),
        service_id: parseInt(this.$route.params.serviceId),
        description: this.description,
        city_id: this.pickedCity,
        day: newDate,
      });
      this.$router.replace('/userServices');
    },
  },
  mounted() {
    Auth.currentAuthenticatedUser().then(data => { this.user = data.username 
    }).then(() => {
      axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/users/${this.user}`).then(response => {
        this.id = response.data.id;
      });
    });
    axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/companies/${this.$route.params.id}/cities`)
      .then((response) => {
        this.cities = response.data;
      }).catch((error) => {
        console.log(error);
      });
  },
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

.price {
  text-align: center;
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

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>