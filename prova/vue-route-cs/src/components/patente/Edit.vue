<template>
    <div id="tab_aut">
     
       <div v-if="currentPatente" class="edit-form">
            <h3>Patente</h3>
            <form>
                <div class="form-group">
                    <label for="inputId">Id:</label>
                    <input type="number" v-model="currentPatente.id" class="form-control" id="inputId" disabled>
                </div>
                <div class="form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentPatente.nome" class="form-control" id="inputNome">
                </div>
                <div class="form-group">
                        <label for="inputCor">Cor:</label>
                        <input type="text" v-model="currentPatente.cor" class="form-control" id="inputCor" disabled>
                </div>
                             
            </form>
            <button class="badge badge-success" @click="updatePatente">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deletePatente">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Please click on a Patente...</p>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import PatenteDataService from '../../services/PatenteDataService'
 
     export default{
      name:'editPatentes',
      data() {
             return {                
                 currentPatente: null,
                 message: ''
             }
         },
         methods: {

            getPatente(id){

                PatenteDataService.get(id)
                .then(response => {
                    console.log(response.data);
                    this.currentPatente = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updatePatente(){

                PatenteDataService.update(this.currentPatente)
                .then(response => {
                    console.log('PatenteDataService.update');
                    this.message = 'Patente alterada com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deletePatente(){

                PatenteDataService.delete(this.currentPatente.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "patentes-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "patentes-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getPatente(this.$route.params.id);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>