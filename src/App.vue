<template>
    <b-container fluid>
      
      <b-row align-v="center" >      
        <b-col class="wrapper">

          <Nav />
          
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>

          <Footer /> 

        </b-col>
      </b-row>   

    </b-container>    
</template>

<script>
import Nav from './partials/Nav.vue';
import Footer from './partials/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,    
    Footer
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '😷',
    // all titles will be injected into this template
    titleTemplate: '%s - Coronavirus - covid19.budidev.com'
  }   
}
</script>

<style scoped>
  .wrapper {
    min-height: 100vh;
    position: relative;
    padding-bottom: 5em;    
    padding-top: 1.5em;
  }


/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 

}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
  .wrapper {
    padding-top: 3em;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .wrapper {
    padding-top: 6em;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  /* .wrapper {
    padding-top: 8em;
  }   */
}
</style>