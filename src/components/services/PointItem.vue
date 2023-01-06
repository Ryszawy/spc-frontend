<template>
  <li>
    <h3>{{ name }}</h3>
    <div>
      <base-badge v-for="city in cities" :key="city" :type="city" :title="city"></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="servicePointDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'cities'],
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