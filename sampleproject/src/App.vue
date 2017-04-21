<template>
  <div id="app">
    <img src="./assets/logo.png">
    <grand-father></grand-father>
  </div>
</template>

<script>
import GrandFather from './components/GrandFather'

export default {
  name: 'app',
  components: {
    GrandFather
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
