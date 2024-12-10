<template>
    <div class="submit-form">
      <div v-if="!submitted">       
           
                <div class="form-group">
                    <label for="inputChave">Chave:</label>
                    <input type="text" v-model="parametro.chave" class="form-control" id="inputChave">
                </div>            
                <div class="form-group">
                    <label for="inputValor">valor:</label>
                    <input type="number" v-model="parametro.valor" class="form-control" id="inputValor">
                </div>    
  
        <button @click="saveParametro" class="btn btn-success">Salvar</button>
        <router-link to="/parametros" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newParametro">Novo</button>
        <router-link to="/parametros" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import ParametroDataService from '../../services/ParametroDataService'

    export default {
        name: "addparametro",
        data(){
            return {
                parametro: {indice: '', 
                                chave: '',
                                valor: '',
                            },
                submitted: false,
            }            
        },
        methods: {

            saveParametro(){

                var pt = jQuery.extend({}, this.parametro);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                delete pt.id
                if (pt.chave.trim().length > 0 && pt.valor.trim().length > 0) {
                
                    ParametroDataService.create(pt)
                    .then(response => {
                        
                        this.submitted = true;
                        alert("parametro cadastrado com sucesso!");
                    })
                    .catch(e => {                        
                        alert("Erro ao tentar cadastrar. !!! " + e.message);

                    })

                }else{
                    alert('Formulário incompleto !!!');
                }

            },
            newParametro(){

                this.submitted = false;
                this.parametro = {};
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