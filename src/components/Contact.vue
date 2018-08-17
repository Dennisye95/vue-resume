<template>
  <div class="sidebar-content">
    <a :href="link"><i :class="icon"></i>{{ display  }}</a>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'Contact',
  props: ['icon', 'link', 'display']
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.fa {
  padding-right: 0.5em;
}
.contact-link {
  color: white;
}
</style>
