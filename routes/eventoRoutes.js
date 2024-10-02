const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.get('/buscar_proximos', eventoController.listarEventos);
router.get('/buscar_evento/:id', eventoController.buscarPorId);
router.post('/crear_evento', eventoController.crearEvento)
router.put('/modificar_evento/:id', eventoController.actualizarEvento);
router.delete('/borrar_evento/:id', eventoController.eliminarEvento);

module.exports = router;
