<template>
  <div>
    <b-container fluid>

      <b-row class="text-center" align-v="center" >      
        <b-col 
          style="
            min-height: 100vh;
            position: relative;
            padding-top: 6em;
            padding-bottom: 5.5em;
        ">

        <Global />

        <!-- <Footer />  -->

        </b-col>
      </b-row>   

    </b-container>    
  </div>
</template>

<script>
import Global from './components/Global'
// import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Global,
    // Footer
  }
}
</script>