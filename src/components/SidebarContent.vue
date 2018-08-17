<template>
  <div>
    <div class="sidebar-content" v-if="items.length>=8">{{ items.join(', ') }}</div>
    <div class="sidebar-content" v-else v-for="item in items">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'SidebarContent',
  props: ['items']
}
</script>

<style scoped>
</style>
