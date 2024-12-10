<template>
    <div id="tab_aut">
     
       <div v-if="currentParametro" class="edit-form">
            <h3>parametro</h3>
            <form>
                <div class="form-group">
                    <label for="inputCodigo">Codigo:</label>
                    <input type="number" v-model="currentParametro.codigo" class="form-control" id="inputCodigo" disabled>
                </div>            
                <div class="form-group">
                    <label for="inputChave">Chave:</label>
                    <input type="text" v-model="currentParametro.chave" class="form-control" id="inputChave">
                </div>            
                <div class="form-group">
                    <label for="inputValor">valor:</label>
                    <input type="number" v-model="currentParametro.valor" class="form-control" id="inputValor">
                </div>    
                <div class="form-group">
                        <label for="inputDtCad">D. Cadastro:</label>
                        <input type="text" v-model="currentParametro.data_criacao" class="form-control" id="inputDtCad" disabled>
                </div>
                             
            </form>
            <button class="badge badge-success" @click="updateParametro">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteParametro">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Please click on a parametro...</p>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import ParametroDataService from '../../services/ParametroDataService'
 
     export default{
      name:'editparametros',
      data() {
             return {                
                 currentParametro: null,
                 message: ''
             }
         },
         methods: {

            getParametro(codigo){

                ParametroDataService.get(codigo)
                .then(response => {
                    console.log(response.data);
                    this.currentParametro = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updateParametro(){

                ParametroDataService.update(this.currentParametro)
                .then(response => {
                    console.log('ParametroDataService.update');
                    this.message = 'Parametro alterada com sucesso !';
                    alert('Parametro alterado com sucesso!!');
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteParametro(){

                var ret = confirm("Deseja realmente remover o local "+this.currentParametro.codigo+ " ?");

                if(ret){

                    ParametroDataService.delete(this.currentParametro.codigo)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push({ name: "parametros-list" });
                    })
                    .catch(e => {
                    console.log(e);
                    });
                }
            },
            voltar(){
                this.$router.push({ name: "parametros-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getParametro(this.$route.params.codigo);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>