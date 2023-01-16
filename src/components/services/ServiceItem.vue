<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>{{ price }}/$</h4>
    <div class="actions">
      <base-button @click="add()">Add</base-button>
    </div>
  </li>
</template>

<script>
const axios = require('axios');

export default {
  props: ['id', 'name', 'price'],
  methods: {
    add() {
      console.log('add')
      axios.post('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/services/companies', {
        serviceId: this.id,
        companyId: this.$props.id
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
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