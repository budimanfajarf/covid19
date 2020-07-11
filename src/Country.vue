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
          <transition name="fade" mode="out-in">
            <v-select 
              v-if="isLoaded"
              class="style-chooser"
              placeholder="Where are you from?"
              :options="countries"
              label="country"                           
              v-model="selectedCountry"
              :value="selectedCountry" 
              @input="handleSearchCountry"
              style="margin-top: 0.5rem;"
            >
            </v-select>
          </transition>

          <div v-if="!isLoaded" style="margin-top: 0.25rem;">
            <PuSkeleton height="42.5px">
            </PuSkeleton> 
          </div>

          <br />
        </b-col>                
      </b-row>

      <Statistic 
        v-if="selectedCountry"
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
        <b-col md="6" class="nav-bottom">
          <router-link to="/">
            <svg style="left: 5px;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>            
            <span>
              SEE GLOBAL DATA
            </span>
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
  name: 'Country',
  mixins: [numberFormat, dateFormat],
  components: {
    ErrorContent,
    Statistic
  },
  metaInfo () {
    return {
      title: this.title
    }
  },  
  data () {
    return {
      title: 'Country',
      isLoaded: false,
      error: null,
      selectedCountry: null,
      countries: [],
      isCallCountry: false,
      isLoadedCountry: false,
      localStorageCountry: null,
      country: null,
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
  methods: {
    handleSearchCountry(country) {
      if (country) {
        this.isCallCountry = true;
        this.getCountry(country.slug);
        
        this.localStorageCountry = country;
      } else {
        this.isLoadedCountry = false;

        this.localStorageCountry = null;
      }
    },
    getCountries() {
      axios
        .get(`https://api.covid19.budidev.com/v1/countries`)
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.isLoaded = true;
          // this.error = "something error";
        });      
    },
    getCountry(slug) {
      this.country = null;
      axios
        .get(`https://api.covid19.budidev.com/v1/countries/${slug}`)
        .then((response) => {
          this.country = response.data;
          this.country.totalClosed = this.country.totalConfirmed - this.country.totalActive;
        })
        .catch((error) => {
          this.error = error
          this.localStorageCountry = null;
        })
        .finally(() => {
          this.isLoadedCountry = true;
          this.isCallCountry = false;
          // this.error = "something error";          
        });      
    }
  },
  mounted () {
    this.getCountries();

    if (localStorage.slug && localStorage.country) {
      const lsCountry = {
        slug: localStorage.slug,
        country: localStorage.country,
      };

      this.selectedCountry = lsCountry;

      this.isCallCountry = true;
      setTimeout(() => {
        this.handleSearchCountry(lsCountry);
      }, 2000);
    }

  },
  watch: {
    localStorageCountry(country) {
      if (country) {
        localStorage.setItem('slug', country.slug);
        localStorage.setItem('country', country.country);        
      } else {
        localStorage.removeItem('slug');
        localStorage.removeItem('country');
      }
    },
    selectedCountry(selected) {
      if (selected) {
        this.title = selected.country;
      } else {
        this.title = 'Country'; 
      }
    },
    country(newCountry) {
      if (newCountry) {
        this.totalConfirmedText = this.numberWithCommas(this.country.totalConfirmed);
        this.totalActiveText = this.numberWithCommas(this.country.totalActive);
        this.totalClosedText = this.numberWithCommas(this.country.totalClosed);
        this.totalRecoveredText = this.numberWithCommas(this.country.totalRecovered);
        this.totalRecoveredPercentText = this.numberWithPercent(this.country.totalRecoveredPercent);
        this.totalDeathsText = this.numberWithCommas(this.country.totalDeaths);
        this.totalDeathsPercentText = this.numberWithPercent(this.country.totalDeathsPercent);
        this.newConfirmedText = this.numberWithCommas(this.country.newConfirmed);
        this.newRecoveredText = this.numberWithCommas(this.country.newRecovered);
        this.newDeathsText = this.numberWithCommas(this.country.newDeaths);
        this.dateText = this.fullDate(this.country.date);
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

<style>
  .style-chooser .vs__search::placeholder {
    color: #6c757d;
  }

  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    /* background: #dfe5fb; */
    /* text-transform: lowercase;
    font-variant: small-caps; */
    /* border: none; */
    background-color: #eee;
    color: #494f5c;
    border: 1px solid #ededed;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  .style-chooser .vs__dropdown-toggle {
    padding: 3.5px 7px 7px;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #494f5c;
  }
</style>