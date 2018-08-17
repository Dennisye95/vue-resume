<template>
  <div class="main-container">
    <div class="main-header">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  props: ['title']
}
</script>

<style scoped>
</style>
