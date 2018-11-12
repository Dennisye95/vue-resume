<template>
  <div class="main-content">
    <div class="date">
      <div class="start-date">{{ date.start }}</div>
      <div class="date-separator" v-if="date.end">|</div>
      <div class="end-date">{{ date.end }}</div>
    </div>
    <div class="experience">
      <div class="experience-header" :class="{ border: achievements }">
        <div class="company">{{ company }}</div>
        <span class="title">{{ title }}</span>
        <span class="location">{{ location }}</span>
      </div>
      <div class="technologies" v-if="technologies && technologies.length > 0">{{ technologies.join(', ') }}</div>
      <ul class="experience-body" v-if="achievements">
        <li class="experience-point" v-for="point in achievements" v-html="point"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: ['company', 'title', 'date', 'location', 'technologies', 'achievements']
}
</script>

<style scoped>
.date {
  width: 15%;
  display: table-cell;
  text-align: center;
  padding-top: 0;
  vertical-align: top;
}
.experience {
  width: 60%;
  margin-left: 20%;
  display: table-cell;
}
.company {
  font-size: 2em;
  font-weight: 500;
}
.title {
  font-size: 1.2em;
}
.location {
  font-size: 1.2em;
  position: absolute;
  right: 0;
  bottom: 0;
}
.technologies {
  font-weight: 800;
}
.experience-header {
  position: relative;
  margin-top: -0.45em;
}
.border {
  border-bottom: 1px dashed #104b79;
}
.experience-body {
  padding-left: 1.2em;
}
</style>
