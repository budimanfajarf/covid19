<template>
  <nav>
    <b-row align-h="center">
      <b-col md="6">
          <router-link 
            to="/" 
            :class="currentRoute == 'Main' ? 'active': ''"
          >GLOBAL</router-link> 
          
          <!-- / -->
          &nbsp;<b-img src="/apple-touch-icon.png" rounded="circle" alt="Covid19" />&nbsp;

          <router-link 
            to="country"
            :class="currentRoute == 'Country' ? 'active': ''"
          >COUNTRY</router-link>
      </b-col>
    </b-row>      
  </nav> 

</template>

<script>
export default {
  name: 'Nav2',
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }  
}

</script>

<style scoped>
  a {
    color:#3b3e48;
    opacity: .8;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    color:#3b3e48;
    opacity: 1;
    text-decoration: underline;
  }

  .active {
    opacity: 1;
    text-decoration: underline;
  }

  nav {
    text-align: right;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
  }

  img {
    width: 35px; 
    margin: 0 5px;    
  }
</style>
