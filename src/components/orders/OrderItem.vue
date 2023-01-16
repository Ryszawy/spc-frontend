<template>
  <li>
    <div class="row">
      <label>Company</label>
      <p>{{ companyName }}</p>
    </div>
    <div class="row">
      <label>Service</label>
      <p>{{ serviceName }}</p>
    </div>
    <div class="row">
      <label>Date</label>
      <p>{{ orderDate }}</p>
    </div>
    <div class="row">
      <label>Price</label>
      <p>{{ price }}/$</p>
    </div>
    <div class="row">
      <label>Description</label>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['companyName', 'description', 'orderDate', 'price', 'serviceName'],
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

p {
  margin: 0.5rem 0 0 0;
}

li {
  text-align: center;
}
.col {
  display: flex;
  flex-direction: col;
  justify-content: space-around;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
}
</style>
