<template>
  <div>
    <LoadingContent v-if="!isLoaded" />

    <ErrorContent 
      v-if="isLoaded && error" 
      v-bind:error="error" 
    />    

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

              <v-select 
                class="style-chooser"
                placeholder="Where are you from?"
                :options="countries"
                label="country"                           
                v-model="selectedCountry"
                :value="selectedCountry" 
                @input="handleSearchCountry"
              >
              </v-select>

              <br />

              <h1
                v-if="isLoadedCountry"
                class="font-weight-bold h1-title"                   
                style="
                  margin-bottom: 0.25rem;
                  margin-top: 0.25rem;
                  line-height: 1.4;
              ">
                COVID-19 in {{ selectedCountry.country }}
              </h1>
            </b-col>                
          </b-row>

        </b-card>
      </b-row>  

      <LoadingContent v-if="isCallCountry" />

      <Statistic 
        v-if="isLoadedCountry && !isCallCountry"
        v-bind:dateText="dateText"
        v-bind:totalConfirmedText="totalConfirmedText" 
        v-bind:totalActiveText="totalActiveText"
        v-bind:totalClosedText="totalClosedText"
        v-bind:totalRecoveredText="totalRecoveredText"
        v-bind:totalRecoveredPercentText="totalRecoveredPercentText"
        v-bind:totalDeathsText="totalDeathsText"
        v-bind:totalDeathsPercentText="totalDeathsPercentText"          
      />

      <!-- <br v-if="!isLoadedCountry" /> -->

      <b-row v-if="isLoadedCountry" style="font-size: 100%; letter-spacing: 0.25px;" class="text-left" align-h="center">
        <b-col md="6">
          <router-link to="/" style="position: relative;">
            <svg style="position: absolute; left: 5px;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>            
            <span style="padding-left: 30px;">
              SEE GLOBAL DATA
            </span>
          </router-link>
        </b-col>
      </b-row>       

      <br />

    </main>

  </div>
</template>

<script>
import axios from 'axios';
import LoadingContent from './components/LoadingContent.vue';
import ErrorContent from './components/ErrorContent.vue';
import Statistic from './components/Statistic.vue';
import textNumber from './mixins/textNumber.js';

export default {
  name: 'Country',
  mixins: [textNumber],
  components: {
    LoadingContent,
    ErrorContent,
    Statistic
  },
  data () {
    return {
      isLoaded: false,
      error: null,
      selectedCountry: null,
      // selectedCountry: 'canada',      
      countries: [],
      isCallCountry: false,
      isLoadedCountry: false,
      country: {
        totalConfirmed: 0,
        totalActive: 0,
        totalClosed: 0,
        totalRecovered: 0,
        totalRecoveredPercent: 0,
        totalDeaths: 0,
        totalDeathsPercent: 0,
        newConfirmed: 0,
        newRecovered: 0,
        newDeaths: 0,
        date: new Date().toDateString()
      },      
      localStorageCountry: null,
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
          // this.error = false
        })
        .finally(() => {
          this.isLoaded = true;
          // this.error = "something error";
        });      
    },
    getCountry(slug) {
      axios
        .get(`https://api.covid19.budidev.com/v1/countries/${slug}`)
        .then((response) => {
          // console.log(response);
          this.country = response.data;
          this.country.totalClosed = this.country.totalConfirmed - this.country.totalActive;
        })
        .catch((error) => {
          this.error = error
          // this.error = false
          this.localStorageCountry = null;
        })
        .finally(() => {
          this.isLoadedCountry = true;
          this.isCallCountry = false;
          // this.error = "something error";
        });      
    }
  },
  computed: {
    totalConfirmedText() {
      return this.numberWithCommas(this.country.totalConfirmed);
    },
    totalActiveText() {
      return this.numberWithCommas(this.country.totalActive);
    },
    totalClosedText() {
      return this.numberWithCommas(this.country.totalClosed);
    },
    totalRecoveredText() {
      return this.numberWithCommas(this.country.totalRecovered);
    },
    totalRecoveredPercentText() {
      return this.numberWithPercent(this.country.totalRecoveredPercent);
    },
    totalDeathsText() {
      return this.numberWithCommas(this.country.totalDeaths);
    },
    totalDeathsPercentText() {
      return this.numberWithPercent(this.country.totalDeathsPercent);
    },
    newConfirmedText() {
      return this.numberWithCommas(this.country.newConfirmed);
    },
    newRecoveredText() {
      return this.numberWithCommas(this.country.newRecovered);
    },
    newDeathsText() {
      return this.numberWithCommas(this.country.newDeaths);
    },
    dateText() {
      const d = new Date(this.country.date);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];      
      const dateText = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · ${("0"+d.getHours()).slice(-2)}:${("0"+d.getMinutes()).slice(-2)}`;
      return dateText;
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
      this.handleSearchCountry(lsCountry);
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