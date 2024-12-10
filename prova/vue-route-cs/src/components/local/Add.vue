<template>
    <div class="submit-form">
      <div v-if="!submitted">     

        <div class="form-group">
            <label for="inputID">Id:</label>
            <input type="text" v-model="local.id" class="form-control" id="inputID" disabled>
        </div>         
        <div class="form-group">
            <label for="inputNome">Nome:</label>
            <input type="text" v-model="local.nome" class="form-control" id="inputNome">
        </div>            
        <div class="form-group">
                <label for="inputLatitude">Latitude:</label>
                <input type="text" v-model="local.latitude" class="form-control" id="inputCor">
        </div>    
        <div class="form-group">
                <label for="inputLongitude">Longitude:</label>
                <input type="text" v-model="local.longitude" class="form-control" id="inputCor">
        </div>    
  
        <button @click="saveLocal" class="btn btn-success">Salvar</button>
        <router-link to="/locais" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newLocal">Novo</button>
        <router-link to="/locais" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import LocalDataService from '../../services/LocalDataService'

    export default {
        name: "addLocal",
        data(){
            return {
                local: {            indice: '',                                   
                                    nome: '',
                                    latitude:  '',
                                    longitude: ''},
                submitted: false,
            }            
        },
        methods: {

            saveLocal(){

                var local = jQuery.extend({}, this.local);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                delete local.id
                if (local.nome.trim().length > 0 && local.latitude.trim().length > 0 && local.longitude.trim().length > 0) {
                
                    LocalDataService.create(local)
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
            newLocal(){

                this.submitted = false;
                this.local = {};
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