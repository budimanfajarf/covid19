<template lang="html">
  <div>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <Lorem />
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import Lorem from './Lorem.vue'

export default {
  name: 'Global',
  components: {
    Lorem
  }  
};
</script>