<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class=actions>
        <v-date-picker mode="date" v-model="date" :disabled-dates="checkDisabledDates" />
      </div>
      <div class="form-control">
        <label for="city-picker">Pick a city</label>
        <div v-for="city in passCities" :key="city">
          <input type="radio" :id="city" name="city" :value="city" v-model="pickedCity"/>
          <base-badge :type="city" :title="city"></base-badge>
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
        <base-button>Order Service</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>

export default {
  props: ['passCities', 'price'],
  data() {
    return {
      pickedCity: null,
      date: null,
      description: null,
      disabledDates: null,
    };
  },
  computed: {
    checkDisabledDates() {
      if (this.disabledDates) {
        return this.disabledDates;
      } else {
        return null;
      }
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('orders/submitOrder', {
        userId: this.$store.getters.userId,
        pointId: this.$route.params.id,
        serviceId: this.$route.params.serviceId,
        desc: this.description,
        city: this.pickedCity,
        date: this.date,
      });
      this.$router.replace('/userServices');
    },
    getDisabledDates() {
      const selectedPoint = this.$store.getters['services/servicePoints'].find(point => point.idPoint === this.$route.params.id);
      this.disabledDates = selectedPoint.disabledDates;
    }
  },
  created() {
    this.getDisabledDates();
  }
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