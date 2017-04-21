<template>
  <div >
    I'm son </br>
    Give <input type="text" @input="onInput" /> to Sister </br>
    Give <input type="text" @input="onGlobalInput" /> to Sister(vuex)
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'son',
  data () {
    return {
      msg: 'Message',
      global
    }
  },
  methods : {
    onInput : function(event){
      this.$emit('sendFather' , event.target.value);
    } , 
    onGlobalInput : function(event){
      this.$store.dispatch('changeGThing', {newThing : event.target.value});   
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
