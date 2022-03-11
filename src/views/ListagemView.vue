<template>
  <div class="about">
    <h1>Municípios do Maranhão</h1>
    <div  class="container">
    <hr>
    <input class="searchField" ref="searchField" type="text" v-model="search" placeholder="Pesquise pelo Município">
    <div class="citiesField">
      <ul class="" v-for="(item,index) in municipiosNomeFiltered" :key="index">
          <li v-on:click="selectItem(item)">{{index}} - {{item.nome}} </li>
      </ul>
    </div>
    
    <hr>
    <!-- Modal -->
    <transition v-if="modalVisible" name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="modal-header"
            id="modalTitle"
          >
            <slot name="header">
              Dados do Município
            </slot>
          </header>

          <section
            class="modal-body"
            id="modalDescriptionMesoregiao"
          >
            <slot name="body">
              <h2>Mesoregião</h2>
              <h4>ID: {{selecionado.id}}</h4>
              <h4>Nome: {{selecionado.nome}}</h4>
            </slot>
          </section>

          <section
            class="modal-body"
            id="modalDescriptionMacroregiao"
          >
            <slot name="body">
              <h2>Macroregião</h2>
              <h4>{{selecionado}}</h4>
            </slot>
          </section>

          <footer class="modal-footer">            
            <button
              type="button"
              class="btn-red"              
              v-on:click="close"
              aria-label="Close modal"
            >
              Fechar
            </button>
          </footer>
        </div>
      </div>
    </transition>
   </div>
  </div>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 10px 1px rgb(61, 60, 60);
    overflow-x: auto;
    width: 1000px;
    height: auto;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #000000;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    color: gray;
    padding: 20px 10px;
  }

.btn-red {
    color: white;
    background: #ae564a;
    border: 1px solid #ae4a4a;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>

<style scoped>
  .about{
    margin: 10px; 
  }
  h1{
    margin: 10px; 
  }
  .searchField{
    margin: 10px; 
    padding: 5px;
    width: 25%;
    border: solid 1px black;
  }
  .citiesField{
    overflow: auto;
    height: 500px;
  }
  ul{
    margin: 10px;
  }

  li {
    background-color: rgb(245, 245, 245);
    padding: 15px;
    list-style-type: none;
  }
  li:hover{
    cursor: pointer;
  }

</style>

<script>
import IbgeService  from '@/services/IbgeService.js';

export default {
  name: 'ListagemView',


  data(){
    return{
      municipiosNome: [],
      selecionado: Object,
      municipiosNomeFiltered: [],
      search: '',
      modalVisible: false,
    }
  },
  components: {
    
  },
  methods:{
    close() {
      this.modalVisible = false;
    },
    selectItem(item) {
      this.selecionado = item;
      this.modalVisible = true;
    }
  },   
  watch:{
    search: function () {
      let all = this.municipiosNome;
      let parcial = [];
      let lookFor = this.$refs.searchField.value;
      all.forEach(element => {
        if(element.nome.toUpperCase().includes(lookFor.toUpperCase()))
          parcial.push(element);
      });
      this.municipiosNomeFiltered = parcial;
    }
  },
  created(){
    this.service = new IbgeService();
  },
  mounted() {
   
    this.service.listarMunicipiosDoMaranhao().then(result => {
          console.log(result.data);
          if(result.length >= 1)
            this.municipiosNomeFiltered = result;
            this.municipiosNome = result; 
       });
  }
}
</script>
