<template>
  <b-row align-h="center">
    <b-col md="6">   
      <b-alert show variant="danger">
        {{ error }}
      </b-alert>        
    </b-col>
  </b-row>     
</template>

<script>
export default {
  name: 'ErrorContent',
  props: ['error']
}
</script>