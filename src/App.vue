<template>
  <div id="app">
    <Global />
  </div>
</template>

<script>
import Global from './components/Global.vue'

export default {
  name: 'App',
  components: {
    Global
  }
}
</script>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}
body {
  /* background-color: #fafafa!important; */
  /* color: #444!important; */
  /* background-color: #fdfdfd!important; */
  /* background-color: blue!important; */
  /* background-image: linear-gradient(red,yellow);  */
  /* min-height: 100%;  */
  color: #494f5c!important;  
  /* background-color: #f9f9f9!important; */
  background-image: linear-gradient(#fff,#f9f9f9);
}
</style>
