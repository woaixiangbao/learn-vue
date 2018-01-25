<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <svg width="440" height="240" viewbox="0 0 440 440">
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#FF0000" fill="none"></circle>
      <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#FF7F00" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="0 1069"></circle>
      <circle cx="220" cy="220" r="180" stroke-width="10" stroke="#FFFF00" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="1069 0"></circle>
      <circle cx="220" cy="220" r="170" stroke-width="10" stroke="#00FF00" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="1069 0"></circle>
      <circle cx="220" cy="220" r="160" stroke-width="10" stroke="#00FFFF" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="1069 0"></circle>
      <circle cx="220" cy="220" r="150" stroke-width="10" stroke="#0000FF" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="1069 0"></circle>
      <circle cx="220" cy="220" r="140" stroke-width="10" stroke="#8B00FF" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="1069 0"></circle>
    </svg>
    <p>拖我： <input id="range" type="range" min="0" max="100" value="0" ></p>
    <p>
      <router-link to="/home">去home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test bb'
    };
  },
  mounted () {
    if (window.addEventListener) {
      var range = document.querySelector('#range');
      var circle = document.querySelectorAll('circle')[1];
      if (range && circle) {
        range.addEventListener('change', function () {
          var percent = this.value / 100;
          var perimeter = Math.PI * 2 * 170;
          circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
circle{
  -webkit-transition: stroke-dasharray .25s;
  transition: stroke-dasharray .25s;
}
p{
  input{
    width: 300px;
  }
}
</style>
