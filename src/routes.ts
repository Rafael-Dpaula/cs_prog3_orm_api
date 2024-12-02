import { Router } from 'express';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import EnderecoController from './app/controllers/EnderecoController';
import ArtefatoController from './app/controllers/ArtefatoController';
import CompraController from './app/controllers/CompraController';
const router = Router();

router.get('/jogador/:nickname', JogadorController.find);
router.get('/listjogadores', JogadorController.list);

/*
router.post('/StorePatente', PatenteController.store);
router.post('/ListPatente', PatenteController.list);

router.post('/StoreEndereco', EnderecoController.store);
router.post('/ListEndereco', EnderecoController.list);

router.post('/StoreArtefato', ArtefatoController.store);
router.post('/ListArtefato', ArtefatoController.list);

router.post('/StoreCompra', CompraController.store);
router.post('/ListCompra', CompraController.list);
*/
export default router;
