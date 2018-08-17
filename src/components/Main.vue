<template>
  <div class="main">
    <MainSection title="Work Experience">
      <Experience v-for="experience in experiences" v-bind="experience" />
    </MainSection>
    <MainSection title="Education">
      <Experience v-for="experience in education" v-bind="experience" />
    </MainSection>

  </div>
</template>

<script>
import MainSection from './MainSection'
import Experience from './Experience'
import data from '../../data'

export default {
  name: 'Main',
  components: {
    MainSection,
    Experience
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
  font-size: 11px;
  display: table-cell;
  text-align: left;
  margin: 0 auto;
  padding: 2.5%;
  width: 75%;
  margin-left: 25%;
  height: 100%;
  vertical-align: top;
}
</style>
