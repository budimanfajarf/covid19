<template lang="html">
  <b-container fluid>

    <b-row class="vh-100 text-center" align-v="center">
      <b-col>

        <b-spinner v-if="!isLoaded" label="Spinning"></b-spinner>

        <b-alert v-if="isLoaded && error" show variant="danger">{{ error }}</b-alert>        

        <main v-if="isLoaded && !error">

          <b-row class="text-left">
            <b-card class="shadow-card" style="border-radius: 0;">
              <b-row align-h="center">
                <b-col md="8" style="font-size: 110%; letter-spacing: 0.2px; line-height: 1.55">
                  <!-- <br />                 -->
                  <p>
                    <strong style="font-size: 150%;" class="text-success">
                      {{totalRecoveredPercentText}}
                    </strong>
                     of
                    <!-- <strong> -->
                      {{totalClosedText}}                      
                    <!-- </strong>   -->
                     people who have been infected with the coronavirus before have recovered and survived! 😊
                  </p>
                  <p>
                    Don't spread the fear and believe that humanity can get past this pandemic 💪,
                    but don't forget that  
                    <strong class="text-danger">
                      {{totalDeathsPercentText}}
                    </strong>
                    of 
                    <!-- <strong> -->
                      {{totalClosedText}}                      
                    <!-- </strong>  -->
                    people have died due to this coronavirus 😔 
                  </p>            
                  <p>
                    Cause of that,
                    <ul>
                      <li>
                       Stay healthy 💟
                      </li>
                      <li>
                        Apply social distancing ✋
                      </li>
                      <li>
                        Wear masks 😷
                      </li>
                      <li>
                        and regularly wash your hands 👏
                      </li>
                    </ul>
                  </p>
                  <p>
                    Currently there are 
                    <strong>
                      {{totalActiveText}}                      
                    </strong>  
                    people who are actively infected with the coronavirus, 
                    let's <strong>pray</strong> for them to get better soon and follow 
                    <strong class="text-success">
                      {{totalRecoveredPercentText}}
                    </strong> 
                    of those who have recovered 🙏😇
                  </p>

                </b-col>                
              </b-row>
            </b-card>
          </b-row>  

          <br />
                
          <b-row class="text-right">
            <b-col>
              <span class="text-muted">
                Last updated at: 
              </span>
              <span>
                {{ dateText }}
              </span>
            </b-col>
          </b-row>                

          <br />  

          <!-- Start Statistic -->
          <b-row align-h="center">
            <b-col md="6">
                
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

                      
                      <b-row align-v="center">

                        <b-col cols="12" sm="7">
                          <br />
                          <h4 class="text-muted">
                            Recovered
                          </h4>
                          <h1 style="margin-top: -6px;" class="display-3 text-success font-weight-bold">
                            {{totalRecoveredPercentText}}
                          </h1> 
                          <h2 style="margin-top: -12.5px">
                            {{totalRecoveredText}}
                          </h2>   
                        </b-col>   
                        
                        <b-col cols="12" sm="5">
                          <br />
                          <h5 class="text-muted">
                            Deaths
                          </h5>
                          <h1 style="margin-top: -5px;" class="display-4 text-danger font-weight-bold">
                            {{totalDeathsPercentText}}
                          </h1>   
                          <h4 style="margin-top: -10px;">
                            {{totalDeathsText}}
                          </h4>   
                        </b-col>    

                      </b-row>  

                    </b-card>              
                  </b-col>
                </b-row>

                <br />

                <!-- <b-row>
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

                <br />              -->

            </b-col>
          </b-row>
          <!-- End Statistic -->

        </main>

        <footer v-if="isLoaded && !error" class="text-center; text-muted">
          <b-row>
            <!-- <b-col cols="12"> -->
            <b-card style="border-radius: 0; width: 100%;" class="shadow-card">
              <b-row align-h="center">
                <b-col md="8" style="font-size: 90%">
                  <a class="text-muted" href="https://github.com/budimanfajarf/covid19" style="text-decoration: underline" rel="noopener" target="_blank">
                    github
                  </a> 
                  /
                  <a class="text-muted" href="https://api.covid19.budidev.com" style="text-decoration: underline" rel="noopener" target="_blank">
                    api
                  </a> 
                  /
                  <a class="text-muted" href="https://budidev.com" style="text-decoration: underline" rel="noopener" target="_blank">
                    author
                  </a>
                  <br />                   
                  2020 · <a class="text-muted" href="/">covid19.budidev.com</a>
                </b-col>
              </b-row>
            </b-card>
            <!-- </b-col> -->
          </b-row>
        </footer>

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
    dateText() {
      const d = new Date(this.global.date);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];      
      const dateText = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · ${("0"+d.getHours()).slice(-2)}:${("0"+d.getMinutes()).slice(-2)}`;
      return dateText;
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