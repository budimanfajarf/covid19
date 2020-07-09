<template>
  <footer class="text-center; text-muted"
  style="
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 100%;
  ">
    <!-- <b-row> -->
      <!-- <b-col cols="12"> -->
      <b-card 
        class="shadow-card"
        style="
          border-radius: 0;
          box-shadow: none;
          background-color: #eee;
        ">
        <b-row align-h="center">
          <b-col md="8" style="font-size: 90%">
            <a class="text-muted" href="https://github.com/budimanfajarf/covid19" rel="noopener" target="_blank">repository</a> / 
            <a class="text-muted" href="https://api.covid19.budidev.com" rel="noopener" target="_blank">api</a> /
            <a class="text-muted" href="https://budidev.com" rel="noopener" target="_blank">author</a>
            <br />                   
            2020 · <a class="text-muted" style="text-decoration: none;" href="/">covid19.budidev.com</a>
          </b-col>
        </b-row>
      </b-card>
      <!-- </b-col> -->
    <!-- </b-row> -->
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  a {
    opacity: 1;
    text-decoration: underline;
  }
</style>