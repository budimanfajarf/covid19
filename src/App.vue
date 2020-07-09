<template>
  <div>
    <b-container fluid>

      <b-row class="text-center" align-v="center" >      
        <b-col 
          style="
            min-height: 100vh;
            position: relative;
            padding-top: 4.5em;
            padding-bottom: 5.25em;
        ">

        <Nav/>

        <router-view></router-view>

        <Footer /> 

        </b-col>
      </b-row>   

    </b-container>    
  </div>
</template>

<script>
import Nav from './partials/Nav.vue';
import Footer from './partials/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,    
    Footer
  }
}
</script>