<template lang="html">
  <b-container>
    <b-row class="vh-100 text-center" align-v="center">
      <b-col>
        <b-spinner v-if="!isLoaded" label="Spinning"></b-spinner>

        <b-alert v-if="isLoaded && error" show variant="danger">{{ error }}</b-alert>        

        <div v-if="isLoaded && !error">

          <!-- <b-row>
            <b-col>
              <Lorem />
            </b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
          </b-row>     -->

          <b-row>
            <b-col>
              <b-card>

                <b-row>
                  <b-col>
                    <!-- <b-card title="Title">
                      <b-card-text>10,000 Confirmed</b-card-text>
                    </b-card>               -->
                    <h5 class="text-muted">
                      Total Confirmed
                    </h5>

                    <h2>
                      {{totalConfirmedText}}
                    </h2>                    
                  </b-col>
                </b-row>

                <br />

                <b-row>
                  <b-col>
                    <h5 class="text-muted">
                      Active Cases
                    </h5>

                    <h2>
                      {{totalActiveText}}
                    </h2>                     
                  </b-col>
                </b-row>

                <br />
                
                <b-row>
                  <b-col>

                    <!-- <b-card> -->
                      <!-- <b-row>
                        <b-col>
                          <h5 class="text-muted">
                            Closed Cases
                          </h5>

                          <h2>
                            {{totalClosedText}}
                          </h2>                     
                        </b-col>                        
                      </b-row>    -->

                      <!-- <br /> -->
                      
                      <b-row align-v="center">
                        <b-col cols="8">
                          <b-card>
                          <h4 style="font-size: 7vw" class="text-muted">
                            Recovered
                          </h4>
                          <h1 style="font-size: 18vw" class="display-2 text-success font-weight-bold">
                            {{totalRecoveredPercentText}}
                          </h1> 

                          <h1 style="font-size: 8vw; margin-top: -17px">
                            {{totalRecoveredText}}
                          </h1>   
                          </b-card>                  
                        </b-col>   

                        <b-col cols="4">
                          <b-card>
                          <h5 style="font-size: 3.5vw" class="text-muted">
                            Deaths
                          </h5>

                          <h1 style="font-size: 9vw" class="display-4 text-danger font-weight-bold">
                            {{totalDeathsPercentText}}
                          </h1>   

                          <h4 style="font-size: 4vw; margin-top: -5px;">
                            {{totalDeathsText}}
                          </h4>   

                          </b-card>                  
                        </b-col>                                                   
                      </b-row>  

                    <!-- </b-card>               -->
                  </b-col>
                </b-row>

              </b-card>              
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Lorem from './Lorem.vue'
import axios from 'axios'

export default {
  name: 'Global',
  components: {
    // Lorem
  },
  data () {
    return {
      global: {},
      isLoaded: false,
      error: null
    }
  },
  computed: {
    totalConfirmedText() {
      return this.numberWithCommas(this.global.totalConfirmed);
    },
    totalActiveText() {
      return this.numberWithCommas(this.global.totalActive);
    },
    totalClosedText() {
      return this.numberWithCommas(this.global.totalClosed);
    },
    totalRecoveredText() {
      return this.numberWithCommas(this.global.totalRecovered);
    },
    totalRecoveredPercentText() {
      return this.numberWithPercent(this.global.totalRecoveredPercent);
    },
    totalDeathsText() {
      return this.numberWithCommas(this.global.totalDeaths);
    },
    totalDeathsPercentText() {
      return this.numberWithPercent(this.global.totalDeathsPercent);
    }
  },
  mounted () {
    axios
      .get('https://api.covid19.budidev.com/v1/global')
      .then((response) => {
        this.global = response.data;
        this.global.totalClosed = this.global.totalConfirmed - this.global.totalActive;
      })
      .catch((error) => {
        this.error = error
        // this.error = false
      })
      .finally(() => {
        this.isLoaded = true;
      });
  },
  methods: {
    numberWithPercent: (number) => {
      return `${number}%`;
    },
    numberWithCommas: (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px 0 #e5e5e5, 0 6px 20px 0 #e5e5e5;  
  border-radius: 10px;
}
</style>