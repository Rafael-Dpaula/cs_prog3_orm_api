import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Artefato from '../models/Artefato';
import Compra from '../models/Compra';

class ArtefatoController {

    async store(req: Request, res: Response){

        const repository = getRepository(Artefato);//recupera o repositorio de Endereço
        //console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }    


    async list(req: Request, res: Response){

        const repository = getRepository(Compra);

        const lista = await repository.find();
        
        return res.json(lista);
    }

}

export default new ArtefatoController();