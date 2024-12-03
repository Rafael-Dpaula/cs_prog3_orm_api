import { Router } from 'express';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import EnderecoController from './app/controllers/EnderecoController';
import ArtefatoController from './app/controllers/ArtefatoController';
import CompraController from './app/controllers/CompraController';
const router = Router();

router.get('/jogador/:nickname', JogadorController.find);
router.get('/listjogador', JogadorController.list);
router.post('/insertjogador', JogadorController.store);
router.post('/loginjogador', JogadorController.login);
router.post('/updatejogador', JogadorController.update);
router.get('/deletejogador/:nickname', JogadorController.delete);

router.post('/storepatente', PatenteController.store);
router.post('/findpatente', PatenteController.find);
router.get('/listpatente', PatenteController.list);
router.post('/updatepatente', PatenteController.update);
router.get('/deletepatente/:id', PatenteController.delete);

router.post('/storeendereco', EnderecoController.store);
router.get('/listendereco', EnderecoController.list);

router.post('/storeartefato', ArtefatoController.store);
router.get('/listartefato', ArtefatoController.list);

router.post('/storecompra', CompraController.store);
router.get('/listcompra', CompraController.list);

export default router;
