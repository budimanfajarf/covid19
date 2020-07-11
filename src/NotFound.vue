<template>
  <b-row align-h="center" align-v="center" style="min-height: 55vh; letter-spacing: 1.5px;">
    <b-col md="6">   
      <b-alert show variant="secondary" class="text-center">
        <br />
        <h1 class="h1-title" style="font-weight: normal;">
          404 - NOT FOUND
        </h1>
        <p style="margin-top: 1.5em">
          Back to 
          <router-link to="/" class="alert-link">Home</router-link>          
        </p>
     </b-alert>      
    </b-col>
  </b-row> 
</template>

<script>
export default {
  name: 'Not Found'
}
</script>

<style scoped>
  a {
    text-decoration: underline;
  }
</style>