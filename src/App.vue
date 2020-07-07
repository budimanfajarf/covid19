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
  color: #494f5c!important;
  background-image: linear-gradient(#fff,#f9f9f9);
}
</style>
