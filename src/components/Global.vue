<template lang="html">
  <b-container fluid="sm">

    <b-row class="vh-100 text-center" align-v="center">
      <b-col>

        <b-spinner v-if="!isLoaded" label="Spinning"></b-spinner>

        <b-alert v-if="isLoaded && error" show variant="danger">{{ error }}</b-alert>        

        <main v-if="isLoaded && !error">

          <b-row class="text-left">
            <b-card class="shadow-card" style="border-radius: 0;">
              <br />                
              <Lorem />
            </b-card>
          </b-row>  

          <br />  

          <!-- Start Statistic -->
          <b-row>
            <b-col>
                
                <b-row>
                  <b-col>
                    <b-card class="shadow-card">
                      <b-card-text>
                        <h5 class="text-muted">
                          Coronavirus Cases
                        </h5>

                        <h2>
                          {{totalConfirmedText}}
                        </h2> 

                        <small class="text-muted-2">Total confirmed cases</small>
                      </b-card-text>
                    </b-card>              
                  </b-col>
                </b-row>

                <br />

                <b-row>
                  <b-col>

                    <b-card class="shadow-card">
                      <h5 class="text-muted">
                        Active Cases
                      </h5>

                      <h2>
                        {{totalActiveText}}
                      </h2> 

                      <small class="text-muted-2">Currently Infected Patients</small>
                    </b-card>

                  </b-col>
                </b-row>

                <br />
                
                <b-row>
                  <b-col>
                    <b-card class="shadow-card">

                      <b-row>
                        <b-col>
                          <h5 class="text-muted">
                            Closed Cases
                          </h5>
                          <h2>
                            {{totalClosedText}}
                          </h2>    
                          <small class="text-muted-2">Cases which had an outcome</small>
                        </b-col>                        
                      </b-row>   

                      <br />
                      
                      <b-row align-v="center">

                        <b-col cols="7">
                          <h4 class="text-muted">
                            Recovered
                          </h4>
                          <h1 style="margin-top: -7px;" class="display-2 text-success font-weight-bold">
                            {{totalRecoveredPercentText}}
                          </h1> 
                          <h1 style="margin-top: -17px" class="text-success font-weight-bold">
                            {{totalRecoveredText}}
                          </h1>   
                        </b-col>   

                        <b-col cols="5">
                          <h5 class="text-muted">
                            Deaths
                          </h5>
                          <h1 style="margin-top: -5px;" class="display-4 text-danger font-weight-bold">
                            {{totalDeathsPercentText}}
                          </h1>   
                          <h4 style="margin-top: -10px;" class="text-danger font-weight-bold">
                            {{totalDeathsText}}
                          </h4>   
                        </b-col>    

                      </b-row>  

                    </b-card>              
                  </b-col>
                </b-row>

                <br />

                <b-row>
                  <b-col>
                    <b-card class="shadow-card">
                      <b-row align-v="center">

                        <b-col cols="4">
                          <h6 style="font-size: 90%;" class="text-muted">
                            New Confirmed
                          </h6>
                          <h3 style="margin-top: -5px;">
                            {{newConfirmedText}}
                          </h3> 
                        </b-col>

                        <b-col cols="5">
                          <h5 class="text-muted">
                            New Recovered
                          </h5>
                          <h1 style="margin-top: -7.5px;" class="text-success font-weight-bold">
                            {{newRecoveredText}}
                          </h1> 
                        </b-col>

                        <b-col cols="3">
                          <h6 style="font-size: 90%;" class="text-muted">
                            New Deaths
                          </h6>
                          <h4 style="margin-top: -4px;" class="text-danger font-weight-bold">
                            {{newDeathsText}}
                          </h4> 
                        </b-col>                                                

                      </b-row>
                    </b-card>              
                  </b-col>
                </b-row>   

                <br />             

            </b-col>
          </b-row>
          <!-- End Statistic -->

        </main>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import Lorem from './Lorem.vue'
import axios from 'axios'

export default {
  name: 'Global',
  components: {
    Lorem
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
    },
    newConfirmedText() {
      return this.numberWithCommas(this.global.newConfirmed);
    },
    newRecoveredText() {
      return this.numberWithCommas(this.global.newRecovered);
    },
    newDeathsText() {
      return this.numberWithCommas(this.global.newDeaths);
    },
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
.shadow-card {
  border: none;
  box-shadow: 0 4px 8px 0 #e5e5e5, 0 6px 20px 0 #e5e5e5;  
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
</style>