<template>
    <div id="tab_aut">    
        <div class="col-md-6">
            <h4>Listagem de Locais</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(l, indice) in locais" :key ="l.id" :class="{ active: indice == currentIndex }">
                            <td>{{l.id}}</td>
                            <td>{{l.nome}}</td>
                            <td>{{l.latitude}}</td>
                            <td>{{l.longitude}}</td>
                            <td><button v-on:click="setCurrentLocal(l, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remLocal(l, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentLocal">
                    <h4>Local</h4>
                    <div>
                    <label><strong>Id:</strong></label> {{ currentLocal.id }}
                    </div>
                    <div>
                    <label><strong>Nome:</strong></label> {{ currentLocal.nome }}
                    </div>
                   

                    <a class="badge badge-warning"
                    :href="'/local/' + currentLocal.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Local...</p>
                <router-link to="/addlocal" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import LocalDataService from '../../services/LocalDataService'     
 
     export default{
      name:'listLocais',
      data() {
             return {
                 locais: [],
                 currentLocal: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarLocais(){

                LocalDataService.list().then(response =>{

                    console.log("Retorno do serviço de listagem de locais", response.status);

                   this.locais = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listlocais');
                    console.log(response);
                });
            },
            setCurrentLocal(local, index){

                this.currentLocal = local;
                this.currentIndex = index;
            },
            remLocal(local, index){

                var ret = confirm("Deseja realmente remover o local "+local.id+ " ?");

                if(ret){

                        LocalDataService.delete(local.id)
                    .then(response => {
                        console.log(response.data);
                        this.refreshList();
                    })
                    .catch(e => {
                        console.log(e);
                    });

                }


            },
            refreshList() {
                this.listarLocais();
                this.currentLocal = null;
                this.currentIndex = -1;
            }

         },
         mounted() {
            this.listarLocais();
         }
 
     }
 </script>
    
 <style scoped>

    .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }

     
 </style>