<template>
  <div class="sidebar-container">
    <div class="sidebar-header">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarSection',
  props: ['title']
}
</script>

<style scoped>
</style>
