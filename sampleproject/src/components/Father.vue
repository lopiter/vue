<template>
  <div >
    I'm Father</br>
    <son v-on:sendFather="sendGrand"></son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'father',
  components: {
    Son
  },
  methods : {
    sendGrand : function(data){
      this.$emit('sendGrand' , data)
    }
  }
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
