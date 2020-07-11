<template>
  <main>
    <transition name="fade" mode="out-in">
      <ErrorContent 
        v-if="isLoaded && error" 
        v-bind:error="error" 
      />    
    </transition>

    <div v-if="!error">

      <b-row align-h="center">
        <b-col md="6">                  
          <h1 class="h1-title">
            Coronavirus COVID-19
          </h1>

          <div v-if="isLoaded">
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
          </div>

          <div v-else>
            <p>
              <strong 
                class="text-success"
                style="font-size: 150%;"
              >
              <PuSkeleton width="10%" /> 
              </strong>
              <PuSkeleton style="margin-left: 3%" width="87%" />
              <PuSkeleton />
            </p>
            <p>
              <PuSkeleton :count="3" />
            </p>            
            <p>
              <PuSkeleton width="35%" />
              <ul>
                <PuSkeleton :count="4" width="65%" />
              </ul>
            </p>
            <p>
              <PuSkeleton :count="3">
              </PuSkeleton>
            </p>
          </div>

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
            
      <b-row align-h="center">
        <b-col md="6" class="nav-bottom text-right">
          <router-link to="country">
            <span>
              SEE COUNTRY DATA
            </span>
            <svg style="right: 5px" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>             
          </router-link>
        </b-col>
      </b-row> 

      <br />      

    </div>

  </main>
</template>

<script>
import axios from 'axios';
import ErrorContent from './components/ErrorContent.vue';
import Statistic from './components/Statistic.vue';
import numberFormat from './mixins/numberFormat.js';
import dateFormat from './mixins/dateFormat.js';

export default {
  name: 'Global',
  mixins: [numberFormat, dateFormat],
  components: {
    ErrorContent,
    Statistic
  },
  metaInfo: {
    title: 'Global'
  },  
  data () {
    return {
      isLoaded: false,
      error: null,
      global: null,
      totalConfirmedText: null,
      totalActiveText: null,
      totalClosedText: null,
      totalRecoveredText: null,
      totalRecoveredPercentText: null,
      totalDeathsText: null,
      totalDeathsPercentText: null,
      newConfirmedText: null,
      newRecoveredText: null,
      newDeathsText: null,
      dateText: null      
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
        // this.error = "421 something error";
      });
  },
  watch: {
    global(newGlobal) {
      if (newGlobal) {
        this.totalConfirmedText = this.numberWithCommas(newGlobal.totalConfirmed);
        this.totalActiveText = this.numberWithCommas(newGlobal.totalActive);
        this.totalClosedText = this.numberWithCommas(newGlobal.totalClosed);
        this.totalRecoveredText = this.numberWithCommas(newGlobal.totalRecovered);
        this.totalRecoveredPercentText = this.numberWithPercent(newGlobal.totalRecoveredPercent);
        this.totalDeathsText = this.numberWithCommas(newGlobal.totalDeaths);
        this.totalDeathsPercentText = this.numberWithPercent(newGlobal.totalDeathsPercent);
        this.newConfirmedText = this.numberWithCommas(newGlobal.newConfirmed);
        this.newRecoveredText = this.numberWithCommas(newGlobal.newRecovered);
        this.newDeathsText = this.numberWithCommas(newGlobal.newDeaths);
        this.dateText = this.fullDate(newGlobal.date);
      } else {
        this.totalConfirmedText = null;
        this.totalActiveText = null;
        this.totalClosedText = null;
        this.totalRecoveredText = null;
        this.totalRecoveredPercentText = null;
        this.totalDeathsText = null;
        this.totalDeathsPercentText = null;
        this.newConfirmedText = null;
        this.newRecoveredText = null;
        this.newDeathsText = null;
        this.dateText = null;       
      }
    }    
  }  
};
</script>

<style scoped>

</style>
