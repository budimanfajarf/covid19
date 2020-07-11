<template>   
  <transition name="fade" mode="out-in">
  <b-row align-h="center" align-v="center" style="min-height: 55vh; letter-spacing: 1.5px">
    <b-col md="6">   
      <b-alert show variant="secondary" class="text-center">
        <br />
        <h5>
          {{ error }}
        </h5>
        <p style="margin-top: 1.5em;">
          Back to 
          <router-link to="/" class="alert-link">Home</router-link>          
        </p>
     </b-alert>      
    </b-col>
  </b-row>   
  </transition>
</template>

<script>
export default {
  name: 'ErrorContent',
  props: {
    error: String
  }
}
</script>

<style scoped>
  a {
    text-decoration: underline;
  }
</style>