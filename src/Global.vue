<template>
  <main>
    <LoadingContent v-if="!isLoaded" />

    <ErrorContent 
      v-if="isLoaded && error" 
      v-bind:error="error" 
    />    

    <div v-if="isLoaded && !error">

      <b-row align-h="center">
        <b-col md="6">                  
          <h1 class="h1-title">
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
            <strong>
              {{totalClosedText}}
            </strong>                      
              people who have been infected with the coronavirus before, have been 
            <span class="text-success">
              <strong>
                recovered!
              </strong>
            </span> 😊
          </p>
          <p>
            Don't spread the fear and believe that humanity can get past this pandemic 💪,
            but don't forget that  
            <strong class="text-danger">
              {{totalDeathsPercentText}}
            </strong>
            <!-- of 
              {{totalClosedText}}                      
            people  -->
            have died due to this coronavirus 😔 
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
            
      <b-row style="font-size: 100%; letter-spacing: 0.25px;" class="text-right" align-h="center">
        <b-col md="6">
          <router-link to="country" style="position: relative; color: #3b3e48">
            <span style="padding-right: 30px;">
              SEE COUNTRY DATA
            </span>
            <svg style="position: absolute; right: 5px;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>             
          </router-link>
        </b-col>
      </b-row> 

      <br />      

    </div>

  </main>
</template>

<script>
import axios from 'axios';
import LoadingContent from './components/LoadingContent.vue';
import ErrorContent from './components/ErrorContent.vue';
import Statistic from './components/Statistic.vue';
import numberFormat from './mixins/numberFormat.js';
import dateFormat from './mixins/dateFormat.js';

export default {
  name: 'Global',
  mixins: [numberFormat, dateFormat],
  components: {
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
      return this.fullDate(this.global.date);
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
  metaInfo: {
    title: 'Global'
  } 
};
</script>

<style scoped>

</style>