<template>
  <div>
      <h1>Home</h1>
      <!--<router-view/>--> 
      
      <ChartBar/>
      <ChartDoughnut />
      <ChartLine />
      
      
    
  </div>
</template>

<script>

//import { defineComponent } from 'vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
}

import api  from '@/services/api.js'

//import NavBar from './components/NavBar.vue'

//import axios from "axios";
import ChartBar from "./components/ChartBar.vue"
import ChartDoughnut from "./components/ChartDoughnut.vue"
import ChartLine from "./components/ChartLine.vue"



export default {
  name: 'HomeView',
  
  data(){
    return{
      rankNomes: [],
      arrNome: [],
    }
  },
  
  components: {
   ChartBar,
   ChartDoughnut,
   ChartLine
   
  },
  mounted() {
    api.get('/v2/censos/nomes/').then (response => {
       this.rankNomes = response.data;
       this.arrNome = response.data.nome;
       })  
  },
       
  

  /*data(){
    return{
      ArrNome: [],
      ArrFreq: [],
      ArrRank: []
    }
  },

  async created() {
    const { data } = await axios.get("https://servicodados.ibge.gov.br/api/v2/censos/nomes"); 
    
    
     data.forEach(d => {
      
      const {
        nome,
        freq,
        rank
      } = d;

      this.ArrNome.push({ value: nome });
      this.ArrFreq.push({ value: freq });
      this.ArrRank.push({ value: rank });
     
    });
    
    console.log(this.ArrNome);
    console.log(this.ArrFreq);
    console.log(this.ArrRank);
      
    
  }*/
}
/*import {onMounted, reactive, toRefs } from "vue";
import api from "@/services/api";

export default {
   name: "App",
 
  setup() {
    const data = reactive({
      nomesRank: {},
     
    });

    onMounted (async () => {
      const response = await api.nomes();
      data.nomesRank = response.data;
      console.log(response);
    });
  
    return {
      ...toRefs(data),
    };
    
  }
}*/

</script>