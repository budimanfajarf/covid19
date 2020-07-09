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
        this.localStorageCountry = country.slug;
      } else {
        this.isLoadedCountry = false;
        localStorage.removeItem('country');
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
      // return numberWithPercentt(this.country.totalDeathsPercent)
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
    
    if (localStorage.country) {
      this.selectedCountry = localStorage.country;
      this.handleSearchCountry({
        slug: localStorage.country
      })
    }  
  },
  watch: {
    localStorageCountry(slug) {
      localStorage.country = slug;
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