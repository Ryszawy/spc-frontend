<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <div class="xd">
        <h1>Hello {{ user.username }}!</h1>
        <base-button @click="signOut">Sign Out</base-button>
        <base-button @click="test" link to="/">Browse Services</base-button>
      </div>
    </template>
  </authenticator>
</template>

<script>
import { Authenticator } from "@aws-amplify/ui-vue";
// useAuthenticator
import { Auth } from 'aws-amplify';
import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports.js';
const axios = require('axios');

Amplify.configure(awsconfig);
export default {
  data() {
    return {
    }
  },
  methods: {
    sendUuid(user) {
      axios.post('https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/users/register', {
        uuid: user,
      }).then((response) => {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
    test() {
      this.$swal('Welcome in skyflow');
      Auth.currentAuthenticatedUser().then(data => {
        this.sendUuid(data.username);
      });
    },
  },
  components: {
    Authenticator,
  },
  created() {
    localStorage.setItem('reloaded', '0')
  },
  mounted() {
    // Auth.currentAuthenticatedUser().then(data => console.log(data.signInUserSession.accessToken.payload['cognito:groups']));
    // Auth.currentAuthenticatedUser().then(data => console.log(data.username));
    Auth.currentAuthenticatedUser().then((data) => {
      const user = data.username
      axios.get(`https://c7naq2jtq1.execute-api.us-east-1.amazonaws.com/test/users/${user}`)
        .then((response) => {
          if (response.data.id != null) {
            return;
          } else {
            this.sendUuid(user);
            this.setUser(user);
          }
        })
    }).catch(() => {
      console.log('nie wiem co to ');
    })
  },
}
</script>

<style scoped>
.xd {
  text-align: center;
}
</style>

