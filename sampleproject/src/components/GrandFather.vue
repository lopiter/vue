<template>
  <div class="hello">
    I'm GrandFather </br>
    <father v-on:sendGrand="fromFather"></father><mom v-bind:thing="thing"></mom>
  </div>
</template>

<script>
import Father from './Father'
import Mom from './Mom'
export default {
  name: 'grandFather',
  components: {
    Father,
    Mom
  },
  data () {
    return {
      thing: ''
    }
  },
  methods : {
    fromFather : function(data){
        this.thing = data;
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
