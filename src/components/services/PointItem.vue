<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>{{ description }}</h4>
    <div>
      <span v-for="city in cities" :key="city">{{ city }}</span>
    </div>
    <div class="actions">
      <router-link :to="servicePointDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'description', 'cities'],
  computed: {
    servicePointDetailsLink() {
      return this.$route.path + '/' + this.id;
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