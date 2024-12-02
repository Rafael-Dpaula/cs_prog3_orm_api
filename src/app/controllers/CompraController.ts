import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Compra from '../models/Compra';

class CompraController {

    async store(req: Request, res: Response) {

        const repository = getRepository(Compra);

        const { id, data, total } = req.body;

        const idExists = await repository.findOne({ where: { id } });

        if (idExists) {

            return res.sendStatus(409);

        }

        const p = repository.create(req.body);

        await repository.save(p);
        return res.json(p);
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Compra);

        const lista = await repository.createQueryBuilder('tb_jogador');

        return res.json(lista);
    }

}

export default new CompraController();