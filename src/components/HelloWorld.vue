<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <svg width="440" hight="440" viewbox="0 0 440 440">
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#d1d3d7" fill="none"></circle>
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#00a5e0" fill="none" transform="matrix(0,-1,1,0,0,440)"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test aa'
    }
  },
  methods: {
    
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
