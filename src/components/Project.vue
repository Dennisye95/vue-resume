<template>
  <div class="main-content">
    <div class="project">
      <span class="title">{{ title }}</span>
      <span class="separator"> | </span>
      <span class="technologies" v-if="technologies && technologies.length > 0">{{ technologies.join(', ') }}</span>
      <div class="project-body">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['title', 'technologies', 'description']
}
</script>

<style scoped>
.title {
  font-size: 1.7em;
  font-weight: 500;
}
.separator {
  font-size: 1.5em;
  padding-left: 0.25em;
}
.technologies {
  font-weight: 800;
  padding-left: 0.25em;
}
.project-body {
  padding: 0.5em 0 0.5em 2.5em;
}
</style>

