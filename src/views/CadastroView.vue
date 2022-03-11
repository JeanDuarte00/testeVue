<template>
    <div class="content">
      <h1>Cadastro de Imovel</h1>
      <div class="grid-container">
        <div class="grid-child">
          <div class="formData">
            <input class="inputField" type="text" name="Cep" id="Cep" placeholder="CEP">
            <input class="inputField" type="text" name="NomeCidade" id="NomeCidade" placeholder="Nome da Cidade">
            <input class="inputField" type="text" name="NomeRua" id="NomeRua" placeholder="Nome da Rua">
            <input class="inputField" type="number" name="Numero" id="Numero" placeholder="Número">
            <select name="Tipo" id="Tipo">
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="galpao">Galpão</option>
            </select>
            <button>Salvar</button>
          </div>
          
        </div>
        <!--Google Maps-->
        <div class="grid-child">
          <div id="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4065755.3994905264!2d-47.51956133356481!3d-5.645765825995436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7edd77a9bcc1ce5%3A0x6276aba3d96c2934!2zTWFyYW5ow6Nv!5e0!3m2!1spt-BR!2sbr!4v1646977975687!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>   
      </div>  
    </div>
</template>

<style scoped>

  .formData #Numero{
    width: 50%;
  }
  
  .formData #Tipo{
    width: 50%;
  }

  .formData input{
    padding: 10px;
    margin: 10px 0px;
  }

  .formData select{
    padding: 10px;
    margin: 10px 0px;
    width: 100%;
    border: solid 1px black;
    background-color: rgb(231, 231, 231);
  }

  .formData button{
    padding: 10px;
    margin: 10px 0px;
    background-color: rgb(45, 104, 45);
    color: #fff;
    width: 100%;
  }

  iframe{
    width: 100%;
    height: 700px;
  }
 
  .content{
    margin: 10px;
    padding: 10px;
  }

  h1{
    margin: 20px 0px 30px 0px;
  }

  .inputField{
    padding: 10px;
    border: solid 1px black;
    width: 100%;    
  }
  .grid-child{
    grid-row: span 4;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }

</style>

<script>
//import ChartDoughnut from "./components/CharLine.vue"

export default {
  name: 'CadastroView',

  data: () => ({
    //
  }),

components: {
  
}

}
</script>
