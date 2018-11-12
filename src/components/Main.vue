<template>
  <div class="main">
    <MainSection title="Experience">
      <Experience v-for="experience in experiences" v-bind="experience" />
    </MainSection>
    <MainSection title="Projects">
      <Project v-for="project in projects" v-bind="project" />
    </MainSection>
  </div>
</template>

<script>
import MainSection from './MainSection'
import Experience from './Experience'
import Project from './Project'
import data from '../../data'

export default {
  name: 'Main',
  components: {
    MainSection,
    Experience,
    Project,
  },
  data: () => {
    return data.main
  }
}
</script>

<style>
.main-container {
  padding: 0.5em 0 0.5em 0;
}
.main-header {
  text-transform: uppercase;
  font-size: 2.5em;
  padding: 0.1em 0 0.1em 0;
  margin: 0.2em 0 0.2em 0;
  border-top: 1px solid #104b79;
  border-bottom: 1px solid #104b79;
}
.main-content {
  padding: 0.15em 0 0.15em 0;
}
</style>

<style scoped>
.main {
  background: white;
  color: #104b79;
  font-size: 12px;
  display: table-cell;
  text-align: left;
  margin: 0 auto;
  padding: 2.5%;
  width: 70%;
  margin-left: 30%;
  height: 100%;
  vertical-align: top;
}
</style>
