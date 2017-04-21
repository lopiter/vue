<template>
  <div >
    I'm daughter </br>
    Son Give Me {{thing}}</br>
    Son Give Me {{msg}}(vuex)
  </div>
</template>

<script>
export default {
  name: 'daughter',
  props : ['thing'],
  computed: { 
      msg () { 
        return this.$store.state.gThing; 
      } 
    },   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
