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
    font-size: 135%;
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
            <a 
              href="#" 
              style="color:#494f5c;"
              :class="active == 'global' ? 'active': ''"
            >GLOBAL</a> 
            &nbsp;<b-img 
              src="/apple-touch-icon.png" 
              rounded="circle" 
              alt="Covid19"
              width="40px;"
            >
            </b-img>&nbsp;
            <a href="#" style="color:#494f5c;">COUNTRY</a>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: ['active']  
}
</script>

<style scoped>
  .active {
    font-weight: bold;
  }
</style>