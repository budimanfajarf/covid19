<template>
  <div>
    <b-container fluid>

      <b-row class="text-center" align-v="center" >      
        <b-col 
          style="
            min-height: 100vh;
            position: relative;
            padding-top: 5.5em;
            padding-bottom: 5.5em;
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
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Nav,    
    Footer
  }
}
</script>