<template>
  <div class="sidebar">
    <Name v-bind="identity" />
    <SidebarSection title="Contact">
      <Contact v-for="contact in contacts" :key="contact.name" :display="contact.display" :icon="contact.faClass" :link="contact.link" />
    </SidebarSection>
    <SidebarSection title="Languages">
      <Proficiency v-for="language in languages" :key="language.skill" :skill="language.skill" :proficiency="language.proficiency" />
    </SidebarSection>
    <SidebarSection v-for="section in sections" :title="section.title">
      <SidebarContent :items="section.items" />
    </SidebarSection>
    <SidebarSection title="Education">
      <Education :school="education.school" :degree="education.degree" :date="education.date" />
    </SidebarSection>
  </div>
</template>

<script>
import Name from './Name'
import Contact from './Contact'
import Proficiency from './Proficiency'
import SidebarSection from './SidebarSection'
import SidebarContent from './SidebarContent'
import Education from './Education'
import data from '../../data'

export default {
  name: 'Sidebar',
  components: {
    Name,
    Contact,
    Proficiency,
    SidebarSection,
    SidebarContent,
    Education
  },
  data: () => {
    return data.sidebar
  }
}
</script>

<style>
.sidebar-container {
  padding: 0.5em 0 0.5em 0;
}
.sidebar-header {
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
  padding: 0.1em 0.1em 0.1em 0;
  margin: 0.2em 0 0.2em 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.sidebar-content {
  padding: 0.15em 0 0.15em 2.5%;
}
</style>

<style scoped>
.sidebar {
  background: #104b79;
  color: white;
  font-size: 11px;
  display: table-cell;
  text-align: left;
  margin: 0 auto;
  padding: 2.5%;
  width: 25%;
  height: 100%;
  vertical-align: top;
}
</style>
