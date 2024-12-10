import http from "../http-common";

class LocalDataService {

    async list(){

        console.log('LocalDataService.list: ');
        return await http.get(`/listlocal`);
    }

    async get(id){

        console.log('LocalDataService.get: ', id);
        return await http.get('/local/'+id);
    }

    async delete(id){

        console.log('LocalDataService.delete: ', id);
        return await http.get(`/deletelocal/`+id);
    }

    async update(data){

        console.log('LocalDataService.update: ', data);
        return await http.post(`/updatelocal/`, data);
    }
    
    async create(data){

        console.log('LocalDataService.create: ', data);
        return await http.post(`/insertlocal/`, data);

    }  

}

export default new LocalDataService();