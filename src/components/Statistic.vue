<template>
  <div>
    <br />
          
    <b-row align-h="center" class="text-right"
      style="font-size: 90%; padding-right: 5px;
    ">
      <b-col md="6">
        <span class="text-muted-2">
          Last updated: 
        </span>
        <span>
          <PuSkeleton width="80px"> 
            {{ dateText }}
          </PuSkeleton> 
        </span>
      </b-col>
    </b-row>                

    <br />  

    <!-- Start Statistic -->
    <b-row align-h="center" class="text-center">
      <b-col md="6">
          
        <b-row>

          <b-col cols="12" lg="6">

            <b-card class="shadow-card">
              <b-card-text>
                <h5 class="text-muted">
                  Coronavirus Cases
                </h5>

                <h2>
                  <PuSkeleton width="150px">                
                    {{totalConfirmedText}}
                  </PuSkeleton>
                </h2> 

                <small class="text-muted-2 label-2">Total confirmed cases</small>
              </b-card-text>
            </b-card>   

            <br />

          </b-col>

          <b-col cols="12" lg="6">

            <b-card class="shadow-card">
              <h5 class="text-muted">
                Active Cases
              </h5>

              <h2>
                <PuSkeleton width="150px">   
                  {{totalActiveText}}
                </PuSkeleton>                
              </h2> 

              <small class="text-muted-2 label-2">Currently Infected Patients</small>
            </b-card>

            <br />
          
          </b-col>

          <b-col cols="12" lg="12">

            <b-card class="shadow-card">

              <b-row>
                <b-col>
                  <h5 class="text-muted">
                    Closed Cases
                  </h5>
                  <h2>
                    <PuSkeleton width="150px">
                      {{totalClosedText}}
                    </PuSkeleton>
                  </h2>    
                  <small class="text-muted-2 label-2">Cases which had an outcome</small>
                </b-col>                        
              </b-row>   

              
              <b-row align-v="center">

                <b-col cols="12" sm="7">
                  <br />
                  <h4 class="text-muted">
                    Recovered
                  </h4>
                  <h1 style="margin-top: 0px;" class="display-3 text-success font-weight-bold">
                    <PuSkeleton width="175px"> 
                      {{totalRecoveredPercentText}}
                    </PuSkeleton> 
                  </h1> 
                  <h2 style="margin-top: -12.5px">
                    <PuSkeleton width="175px">   
                      {{totalRecoveredText}}
                    </PuSkeleton>
                  </h2>   
                </b-col>   
                
                <b-col cols="12" sm="5">
                  <br />
                  <h5 class="text-muted">
                    Deaths
                  </h5>
                  <h1 style="margin-top: 0px;" class="display-4 text-danger font-weight-bold">
                    <PuSkeleton width="125px"> 
                      {{totalDeathsPercentText}}
                    </PuSkeleton>
                  </h1>   
                  <h4 style="margin-top: -12.5px;">
                    <PuSkeleton width="125px"> 
                      {{totalDeathsText}}
                    </PuSkeleton>
                  </h4>   
                </b-col>    

              </b-row>  

            </b-card>   

            <br />           

          </b-col>

        </b-row>

      </b-col>
    </b-row>
    <!-- End Statistic -->    
  </div>  
</template>

<script>
export default {
  name: 'Statistic',
  props: [
    'dateText', 
    'totalConfirmedText',
    'totalActiveText',
    'totalClosedText',
    'totalRecoveredText',
    'totalRecoveredPercentText',
    'totalDeathsText',
    'totalDeathsPercentText'
  ]
}
</script>
