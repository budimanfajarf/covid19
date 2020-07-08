<template>
  <div id="app">
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

        <Footer /> 

        </b-col>
      </b-row>   

    </b-container>    
  </div>
</template>

<script>
import Global from './components/Global'
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Global,
    Footer
  }
}
</script>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}
body {
  color: #494f5c!important;  
  background-image: linear-gradient(#fff,#f9f9f9);
}
.shadow-card {
  border: none;
  /* box-shadow: 0 4px 8px 0 #e5e5e5, 0 6px 20px 0 #e5e5e5;   */
  box-shadow: 0px 4px 8px 0 rgba(68, 68, 72, 0.09), 0px 6px 20px 0 rgba(68, 68, 72, 0.09);
}
.card {
  border-radius: 5px;
  border: 1px solid #ededed!important;  
}
.text-muted-2 {
  color: #b5b5b5; 
  display: block;
  margin-top: -7px; 
}

@media only screen and (max-width: 576px) {
  .h1-title {
    font-size: 8vw; 
  }
}
</style>