
import http from "../http-common";

class PatenteDataService {

    async list(){

        console.log('PatenteDataService.list: ');
        return await http.get(`/listpatente`);
    }

    async get(id){

        console.log('PatenteDataService.get: ', id);
        return await http.get('/patente/'+id);
    }

    async delete(id){

        console.log('PatenteDataService.delete: ', id);
        return await http.get(`/deletepatente/`+id);
    }

    async update(data){

        console.log('PatenteDataService.update: ', data);
        return await http.post(`/updatepatente/`, data);
    }
    
    async create(data){

        console.log('PatenteDataService.create: ', data);
        return await http.post(`/insertpatente/`, data);

    }  

}

export default new PatenteDataService();