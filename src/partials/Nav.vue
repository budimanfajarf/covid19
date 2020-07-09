<template>
  <nav 
  class="text-center text-muted;" 
  style="
    margin-top: -1px; 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    font-size: 125%;
    letter-spacing: 1.5px;
  ">
    <b-row>
      <b-card
        class="shadow-card"             
        style="
          border-radius: 0; 
          width: 100%; 
        ">
        <b-row align-h="center">
          <b-col md="8">
            <router-link 
              to="/" 
              :class="currentRoute == 'index' ? 'active': ''"
            >GLOBAL</router-link> 
            
            &nbsp;<b-img src="/apple-touch-icon.png" rounded="circle" alt="Covid19" style="width: 40px; margin: 0 5px;"/>&nbsp;

            <router-link 
              to="country"
              :class="currentRoute == 'country' ? 'active': ''"
            >COUNTRY</router-link>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>
  .card-body {
    padding: 0.75rem;
  }  
  a {
    color:#494f5c;
    opacity: .75;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color:#494f5c;
    opacity: 1;
    text-decoration: underline;
  }
  .active {
    opacity: 1;
  }
</style>