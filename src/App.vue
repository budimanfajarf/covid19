<template>
  <div id="app">
    <b-container>
      <Global />
    </b-container>
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
</style>
