import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Patente from '../models/Patente';

class PatenteController {

    async store(req: Request, res: Response) {

        const repository = getRepository(Patente);//recupera o repositorio de Endereço
        //console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }

    async list(req: Request, res: Response) {

        const repository = getRepository(Patente);

        const lista = await repository.find();

        return res.json(lista);
    }

    async find(req: Request, res: Response){
        const repository = getRepository(Patente);

        const id = req.params.id;

        const j = await repository.findOne({where : {id}});

        if(j){     
            console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    };

    async update(req: Request, res: Response) {

        const repository = getRepository(Patente);//recupera o repositorio do PAtente.

        const { id } = req.body;//extrai os atributos id do corpo da mensagem

        const idExists = await repository.findOne({ where: { id } });//consulta na tabela se existe um registro com o mesmo id.

        if (!id) {
            return res.sendStatus(404);
        }

        const p = repository.create(req.body); //cria a entidade Jogador

        await repository.save(p); //persiste (update) a entidade na tabela.

        return res.json(p);
    }

    async delete(req: Request, res: Response) {

        const repository = getRepository(Patente);//recupera o repositorio do jogador.

        const  id  = req.params.id;//extrai os atributos nickname e endereco do corpo da mensagem.

        const idExists = await repository.findOne({ where: { id } });//consulta na tabela se existe um registro com o mesmo nickname da mensagem.

        if (idExists) {

            await repository.remove(idExists);//caso exista, então aplica a remocao fisica. (corrigir erro no pdf 11)
            return res.sendStatus(204);//retorna o coigo 204.

        } else {

            return res.sendStatus(404);//se nao encontrar jogador para remover, retorna o codigo 404.
        }
    }


}

export default new PatenteController();