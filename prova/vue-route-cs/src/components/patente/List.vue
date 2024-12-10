<template>
    <div id="tab_aut">    
        <div class="col-md-6">
            <h4>Listagem de Patentes</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cor</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(p, indice) in patentes" :key ="p.id" :class="{ active: indice == currentIndex }">
                            <td>{{p.id}}</td>
                            <td>{{p.nome}}</td>
                            <td>{{p.cor}}</td>
                            <td><button v-on:click="setCurrentPatente(p, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remPatente(p, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentPatente">
                    <h4>Patente</h4>
                    <div>
                    <label><strong>Id:</strong></label> {{ currentPatente.id }}
                    </div>
                    <div>
                    <label><strong>Data de Cadastro:</strong></label> {{ currentPatente.nome }}
                    </div>
                   

                    <a class="badge badge-warning"
                    :href="'/patente/' + currentPatente.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Patent...</p>
                <router-link to="/addpatente" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import PatenteDataService from '../../services/PatenteDataService'     
 
     export default{
      name:'listPatentes',
      data() {
             return {
                 patentes: [],
                 currentPatente: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarPatentes(){

                PatenteDataService.list().then(response =>{

                    console.log("Retorno do serviço de listagem de patentes", response.status);

                   this.patentes = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listpatente');
                    console.log(response);
                });
            },
            setCurrentPatente(patente, index){

                this.currentPatente = patente;
                this.currentIndex = index;
            },
            remPatente(patente, index){

                PatenteDataService.delete(patente.id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });

            },
            refreshList() {
                this.listarPatentes();
                this.currentPatente = null;
                this.currentIndex = -1;
            }

         },
         mounted() {
            this.listarPatentes();
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