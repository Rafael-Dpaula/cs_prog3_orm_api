<template>
    <div class="submit-form">
      <div v-if="!submitted">       

       
        <div class="form-group">
            <label for="inputNome">Nome:</label>
            <input type="text" v-model="patente.nome" class="form-control" id="inputNome">
        </div>            
        <div class="form-group">
                <label for="inputCor">Cor:</label>
                <input type="text" v-model="patente.cor" class="form-control" id="inputCor">
        </div>    
  
        <button @click="savePatente" class="btn btn-success">Salvar</button>
        <router-link to="/patentes" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newPatente">Novo</button>
        <router-link to="/patentes" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import PatenteDataService from '../../services/PatenteDataService'

    export default {
        name: "addPatente",
        data(){
            return {
                patente: {indice: '', 
                                  
                                    nome: '',
                                    cor: ''},
                submitted: false,
            }            
        },
        methods: {

            savePatente(){

                var pt = jQuery.extend({}, this.patente);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                delete pt.id
                if (pt.nome.trim().length > 0 && pt.cor.trim().length > 0) {
                
                    PatenteDataService.create(pt)
                    .then(response => {
                        
                        this.submitted = true;
                    })
                    .catch(e => {                        
                        alert("Erro ao tentar cadastrar. !!! " + e.message);

                    })

                }else{
                    alert('Formulário incompleto !!!');
                }

            },
            newPatente(){

                this.submitted = false;
                this.patente = {};
            },
            

        },
        mounted() {                        
            
            
        }

    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>