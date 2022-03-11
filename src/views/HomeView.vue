<template>
  <div>
  <ChartBar :dataValues = "rankNomes" />
  
    <hr>
    <ul v-for="(item,index) in rankNomes" :key="index">
        <li>{{item.ranking}} - {{item.nome}} (frequencia = {{ item.frequencia }})</li>
    </ul>
    
   </div>
</template>

<script>
//import { defineComponent } from 'vue';

// Components
import ChartBar from '../components/ChartBar.vue';
import IbgeService  from '@/services/IbgeService.js';


export default {
  name: 'HomeView',


  data(){
    return{
      rankNomes: [],
     // arrNome: [],
    }
  },
  components: {
    ChartBar,
  },
   created(){
    this.service = new IbgeService();

  },
  mounted() {
    // Açailandia = 2100055
    this.service.listarRankingDeNomesPorLocalidade(2100055).then(result => {
          console.log(result.data);
          if(result.length == 1)
            this.rankNomes = result[0].res;
       });
  }
}
</script>
