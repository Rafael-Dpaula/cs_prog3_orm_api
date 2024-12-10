<template>
    <div id="tab_aut">    
        <div class="col-md-6">
            <h4>Listagem de parametros</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">ID:</th>
                    <th scope="col">Chave:</th>
                    <th scope="col">Valor:</th>
                    <th scope="col">Data_criacao:</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(p, indice) in parametros" :key ="p.codigo" :class="{ active: indice == currentIndex }">
                            <td>{{p.codigo}}</td>
                            <td>{{p.chave}}</td>
                            <td>{{p.valor}}</td>
                            <td>{{p.data_criacao}}</td>
                            <td><button v-on:click="setCurrentParametro(p, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remParametro(p, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentParametro">
                    <h4>parametro</h4>
                    <div>
                    <label><strong>Id:</strong></label> {{ currentParametro.codigo }}
                    </div>
                    <div>
                    <label><strong>Chave:</strong></label> {{ currentParametro.chave }}
                    </div>
                   

                    <a class="badge badge-warning" :href="'/parametro/' + currentParametro.codigo">Edit</a>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Param...</p>
                <router-link to="/addparametro" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import ParametroDataService from '../../services/ParametroDataService'     
 
     export default{
      name:'listparametros',
      data() {
             return {
                 parametros: [],
                 currentParametro: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarParametros(){

                ParametroDataService.list().then(response =>{

                    console.log("Retorno do serviço de listagem de parametros", response.status);

                   this.parametros = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listparametro');
                    console.log(response);
                });
            },
            setCurrentParametro(parametro, index){

                this.currentParametro = parametro;
                this.currentIndex = index;
            },
            remParametro(parametro, index){

                var ret = confirm("Deseja realmente remover o local "+parametro.codigo+ " ?");

                if (ret) {
                    
                    ParametroDataService.delete(parametro.codigo)
                    .then(response => {
                        console.log(response.data);
                        this.refreshList();
                        alert("O parametro " + parametro.codigo + " foi removido com sucesso!");
                    })
                    .catch(e => {
                        console.log(e);
                    });
                }


            },
            refreshList() {
                this.listarParametros();
                this.currentParametro = null;
                this.currentIndex = -1;
            }

         },
         mounted() {
            this.listarParametros();
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