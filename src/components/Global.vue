<template lang="html">
  <sui-grid divided="vertically">
    <sui-divider />
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <Lorem />
      </sui-grid-column>
      <sui-grid-column>
        <Lorem />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row :columns="3">
      <sui-grid-column>
        <Lorem />
      </sui-grid-column>
      <sui-grid-column>
        <Lorem />
      </sui-grid-column>
      <sui-grid-column>
        <Lorem />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import Lorem from './Lorem.vue'

export default {
  name: 'Global',
  components: {
    Lorem
  }  
};
</script>