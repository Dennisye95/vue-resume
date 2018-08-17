<template>
  <div id="app">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Sidebar,
    Main
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: table;
}
</style>
