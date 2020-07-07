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
  color: #444!important;
}
</style>
