<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>
  
<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>
  
<style scoped>
.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.Lodz {
    background-color: #3d008d;
    color: white;
}

.Warsaw {
    background-color: #2e1164;
    color: white;
}

.Gdansk {
    background-color: #c424a9;
    color: white;
}

.adsx {
  background-color: #6d31db;
    color: white;
}

.Poznan {
    background-color: #71008d;
    color: white;
}

.Krakow {
    background-color: #8d006e;
    color: white;
}
</style>