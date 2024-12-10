
import http from "../http-common";

class ParametroDataService {

    async list(){

        console.log('ParametroDataService.list: ');
        return await http.get(`/listparametro`);
    }

    async get(codigo){

        console.log('ParametroDataService.get: ', codigo);
        return await http.get('/parametro/'+codigo);
    }

    async delete(codigo){

        console.log('ParametroDataService.delete: ', codigo);
        return await http.get(`/deleteparametro/`+codigo);
    }

    async update(data){

        console.log('ParametroDataService.update: ', data);
        return await http.post(`/updateparametro/`, data);
    }
    
    async create(data){

        console.log('ParametroDataService.create: ', data);
        return await http.post(`/insertparametro/`, data);

    }  

}

export default new ParametroDataService();