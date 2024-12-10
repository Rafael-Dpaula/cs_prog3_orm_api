<template>
    <div id="tab_aut">
     
       <div v-if="currentLocal" class="edit-form">
            <h3>Local</h3>
            <form>
                <div class="form-group">
                    <label for="inputId">Id:</label>
                    <input type="number" v-model="currentLocal.id" class="form-control" id="inputId" disabled>
                </div>
                <div class="form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentLocal.nome" class="form-control" id="inputNome">
                </div>
                <div class="form-group">
                        <label for="inputCor">Latitude:</label>
                        <input type="text" v-model="currentLocal.latitude" class="form-control" id="inputLatitude">
                </div>
                <div class="form-group">
                        <label for="inputCor">Longitude:</label>
                        <input type="text" v-model="currentLocal.longitude" class="form-control" id="inputLongitude">
                </div>
                             
            </form>
            <button class="badge badge-success" @click="updateLocal">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteLocal">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Please click on a Local...</p>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import LocalDataService from '../../services/LocalDataService'
 
     export default{
      name:'editLocais',
      data() {
             return {                
                 currentLocal: null,
                 message: ''
             }
         },
         methods: {

            getLocal(id){

                LocalDataService.get(id)
                .then(response => {
                    console.log(response.data);
                    this.currentLocal = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updateLocal(){

                LocalDataService.update(this.currentLocal)
                .then(response => {
                    console.log('LocalDataService.update');
                    this.message = 'Local alterada com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteLocal(){

                LocalDataService.delete(this.currentLocal.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "locais-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "locais-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getLocal(this.$route.params.id);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>