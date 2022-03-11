<template>
  <div>
  <p>{{"oi"}}</p>
  <p>{{teste}}</p>
  <BarChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
  </div>
</template>

<script setup>
import api from '@/services/api'
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

console.log("OI")

let teste;
api.get("/v1/localidades/estados/21/municipios").then(response => {
  console.log(response.data);
  console.log(response.data[0]);
  teste = response.data[0].nome;
});

Chart.register(BarController, CategoryScale, LinearScale, BarElement)

//let dataValues = ref(teste)

const dataValues = ref([
  [1, 3, 5, 7, 2, 4, 6],
  [1, 5, 2, 6, 3, 7, 4],
  [1, 5, 2, 6, 3, 7, 4]
])


const data = computed(() => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  datasets: [
    {
      label: "Foo",
      data: dataValues.value[0],
      backgroundColor: pattern.draw("dash", "#268bd2")
    },
    {
      label: "Bar",
      data: dataValues.value[1],
      backgroundColor: pattern.draw("dot", "#2aa198")
    },
    {
      label: "Ok",
      data: dataValues.value[2],
      backgroundColor: pattern.draw("line", "#ff0000")
    }
  ]
}))

const options = ref({
  plugins: {
    title: {
      text: "Bar"
    }
  }
})
</script>
