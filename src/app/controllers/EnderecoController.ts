import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Endereco from '../models/Endereco';

class EnderecoController {

    async store(req: Request, res: Response) {

        const repository = getRepository(Endereco);

        const { id, cep, complemento } = req.body;

        const idExists = await repository.findOne({ where: { id } });

        if (idExists) {

            return res.sendStatus(409);

        }

        const p = repository.create(req.body);

        await repository.save(p);
        return res.json(p);
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Endereco);

        const lista = await repository.createQueryBuilder('tb_jogador');

        return res.json(lista);
    }

}

export default new EnderecoController();