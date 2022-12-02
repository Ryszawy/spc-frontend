<template>
  <li>
    <h3>{{ service }}</h3>
  </li>
</template>

<script>
export default {
  props: ['serviceName'],
  computed: {
    service() {
      return this.serviceName;
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
</style>