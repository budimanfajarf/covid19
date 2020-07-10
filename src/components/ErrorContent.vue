<template>
  <b-row align-h="center">
    <b-col md="6">   
      <b-alert show variant="secondary" class="text-center">
        <p>
          {{ error }}
        </p>
        Back to 
        <router-link to="/" class="alert-link">Home</router-link>          
     </b-alert>      
    </b-col>
  </b-row>     
</template>

<script>
export default {
  name: 'ErrorContent',
  props: {
    error: String
  }
}
</script>