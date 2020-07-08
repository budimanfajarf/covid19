<template>
  <div>
    <LoadingContent v-if="!isLoaded" />

    <ErrorContent 
      v-if="isLoaded && error" 
      v-bind:error="error" 
    />    
    
    <Nav active="global" />

    <main v-if="isLoaded && !error">

      <b-row>
        <b-card 
          class="text-left" 
          style="
            border-radius: 0; 
            width: 100%;
            border: none;
            background-color: transparent;
            border-top: none!important;
            border-left: none!important;
            border-right: none!important;
        ">

          <b-row align-h="center">
            <b-col md="6">                  
              <h1
                class="font-weight-bold h1-title"                   
                style="margin-bottom: 0.75rem;
              ">
                Coronavirus COVID-19
              </h1>
              <p>
                <strong 
                  class="text-success"
                  style="font-size: 150%;"
                >
                  {{totalRecoveredPercentText}}
                </strong>
                  of
                  {{totalClosedText}}                      
                  people who have been infected with the coronavirus before have <span class="text-success">recovered</span>! 😊
              </p>
              <p>
                Don't spread the fear and believe that humanity can get past this pandemic 💪,
                but don't forget that  
                <strong class="text-danger">
                  {{totalDeathsPercentText}}
                </strong>
                of 
                  {{totalClosedText}}                      
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

      <Statistic 
        v-bind:dateText="dateText"
        v-bind:totalConfirmedText="totalConfirmedText" 
        v-bind:totalActiveText="totalActiveText"
        v-bind:totalClosedText="totalClosedText"
        v-bind:totalRecoveredText="totalRecoveredText"
        v-bind:totalRecoveredPercentText="totalRecoveredPercentText"
        v-bind:totalDeathsText="totalDeathsText"
        v-bind:totalDeathsPercentText="totalDeathsPercentText"          
      />

    </main>

  </div>
</template>

<script>
import axios from 'axios';
import Nav from './Nav';
// import Footer from './Footer';
import LoadingContent from './LoadingContent';
import ErrorContent from './ErrorContent';
import Statistic from './Statistic';
import functions from '../functions.js';

export default {
  name: 'Global',
  mixins: [functions],
  components: {
    Nav,
    // Footer,
    LoadingContent,
    ErrorContent,
    Statistic
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
      // return numberWithPercentt(this.global.totalDeathsPercent)
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
        // this.error = "something error";
      });
  },
  // methods: {
  //   numberWithPercent: (number) => {
  //     return `${number}%`;
  //   },
  //   numberWithCommas: (number) => {
  //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   }
  // }
};
</script>

<style scoped>

</style>