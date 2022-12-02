<template>
  <li>
    <h3>{{ service }}</h3>
    <h4>{{ price }}/zl</h4>
    <div>
      <base-badge :type="city" :title="city"></base-badge>
    </div>
  </li>
</template>

<script>
export default {
  props: ['serviceName', 'description', 'price', 'city'],
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

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}
</style>