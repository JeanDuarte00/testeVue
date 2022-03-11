

//import { def } from '@vue/shared';
import axios from 'axios' 
/*
const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v2/censos/'
})

export default {
  nomes() {
    return api.get('/nomes')
  },

  listen(codes = []) {
    return api.get(`/all/${codes.join()}`)
  }
}
*/
 const api = axios.create({
   baseURL: 'https://servicodados.ibge.gov.br/api'
 });

 export default api;