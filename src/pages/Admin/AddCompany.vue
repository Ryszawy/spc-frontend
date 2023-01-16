<template>
  <section>
    <base-card>
      <h1>Create Company</h1>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="form">
        <div class="form-control">
          <label for="name">Company Name</label>
          <input type="text" placeholder="Service name" id="name" v-model.trim="name" />
        </div>
        <base-button @click="submitForm">Submit</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
const axios = require('axios').default;

export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    submitForm() {
      axios.post('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/companies', {
        name: this.name,
      }).then((response) => {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
      this.$swal('Congratulations, you have added a company!');
    }
  },
}
</script>

<style scoped>
.center {
  text-align: center;
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

.input-group {
  display: flex;
  flex-direction: row;
  gap: 15px;
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

.form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

.button {
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
</style>