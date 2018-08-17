<template>
  <div class="sidebar-container identity">
    <div class="name">{{ name }}</div>
    <div class="roles" v-for="role in roles">{{ role }}</div>
  </div>
</template>

<script>
export default {
  name: 'Name',
  props: ['name', 'roles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.identity {
}
.name {
  margin-left: -2.5px;
  font-size: 3.5em;
  font-weight: 1200;
  text-transform: uppercase;
}
.roles {
  font-size: 1.5em;
  font-weight: 600;
}
</style>
