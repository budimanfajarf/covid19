<template>
  <footer class="text-center text-muted">
    <a class="text-muted" href="https://github.com/budimanfajarf/covid19" rel="noopener" target="_blank">repo</a> / 
    <a class="text-muted" href="https://api.covid19.budidev.com" rel="noopener" target="_blank">api</a> /
    <a class="text-muted" href="https://budidev.com" rel="noopener" target="_blank">author</a>
    <br />                   
    2020 · <a class="text-muted" style="text-decoration: none;" href="/">covid19.budidev.com</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
      position: absolute; 
      bottom: 0;
      left: 0;
      width: 100%;    
      padding: 1rem;
      /* background: #eee; */
  }

  a {
    opacity: 1;
    text-decoration: underline;
  }
</style>