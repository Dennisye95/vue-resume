<template>
  <div>
    <div class="sidebar-content"><b>{{ school }}</b></div>
    <div class="sidebar-content">{{ degree }}</div>
    <div class="sidebar-content">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: ['school', 'degree', 'date']
}
</script>

<style scoped>
</style>

