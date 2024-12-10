import { Router } from 'express';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import EnderecoController from './app/controllers/EnderecoController';
import ArtefatoController from './app/controllers/ArtefatoController';
import CompraController from './app/controllers/CompraController';
import LocalController from './app/controllers/LocalController';
const router = Router();

router.get('/jogador/:nickname', JogadorController.find);
router.get('/listjogador', JogadorController.list);
router.post('/insertjogador', JogadorController.store);
router.post('/loginjogador', JogadorController.login);
router.post('/updatejogador', JogadorController.update);
router.get('/deletejogador/:nickname', JogadorController.delete);

router.post('/insertpatente', PatenteController.store);
router.get('/patente/:id', PatenteController.find);
router.get('/listpatente', PatenteController.list);
router.post('/updatepatente', PatenteController.update);
router.get('/deletepatente/:id', PatenteController.delete);

router.post('/insertendereco', EnderecoController.store);
router.get('/listendereco', EnderecoController.list);

router.post('/insertartefato', ArtefatoController.store);
router.get('/listartefato', ArtefatoController.list);

router.post('/insertcompra', CompraController.store);
router.get('/listcompra', CompraController.list);

router.get('/listlocais', LocalController.list)
router.get('/locais/:id', LocalController.find);
router.post('/updatelocal', LocalController.update)
router.post('/deletelocal/:id', LocalController.delete)
router.post('/insertlocal', LocalController.store)

export default router;
