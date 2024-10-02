const express = require('express');
const router = express.Router();
const participacionController = require('../controllers/participacionController');

router.post('/crear_participacion', participacionController.crearParticipacion);
router.put('/confirmar_participacion/:id', participacionController.confirmarParticipacion);
router.delete('/borrar_participacion/:id', participacionController.eliminarParticipacion);
router.get('/lista_confirmados/:idEvento', participacionController.listaConfirmados);
router.get('/certificado/:idEvento/:idAsistente', participacionController.certificadoParticipacion);
module.exports = router;


