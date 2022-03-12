<template>
   <div class="content">
    <BarChart
      :chart-data="data"
      :options="options"
      css-classes="chart-container"
    />
  </div>
</template>

<style scoped>
  .content{
    padding: 20px;
    margin: 20px;
    background-color: #e2e2e2;
  }
</style>

<script >
import IbgeService from '@/services/IbgeService'
import pattern from "patternomaly"
import { ref, computed } from "vue"
import { BarChart } from "vue-chart-3"
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

Chart.register(BarController, CategoryScale, LinearScale, BarElement)

// PROPRIEDADES DO COMPONENTE
export default {
  name: 'ChartBar',

  data(){
    return{
      service: IbgeService,
      dataValues: [],
      chartLabels: [],
      data: computed,
      options: ref
    }
  },
  components: {
    BarChart,
  },
   created(){
    this.service = new IbgeService();
    this.chartLabels = [];
  },
  mounted() {
    this.service.listarRankingDeNomesPorLocalidade(2100055).then(result => {
      console.log(result[0].res.length);
      let labelList = [];
      let valueList = [];

      if(result[0].res.length > 0)
        for(let i = 0; i < result[0].res.length; i++){
          labelList.push(result[0].res[i].nome);
          valueList.push(result[0].res[i].frequencia);
        }
        this.chartLabels = labelList;
        this.dataValues = valueList;


    }).finally(()=>{
      console.log("DATA: " + this.dataValues)
      console.log("DATA: " + this.chartLabels)
      console.log("DATA: " + this.rankNames)


        
      this.data = computed(() => ({
        labels: this.chartLabels,
        datasets: [
          {
            data: this.dataValues,
            backgroundColor: pattern.draw("dot", "#414141")
          }    
        ]
      }))

      this.options = ref({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            text: "Bar"
          }
        }
      })

    });
  }
}




 
  

  // dataValues = [
  //   10,
  //   23,
  //   2,
  //   5,
  //   5
  // ]
  

</script>

