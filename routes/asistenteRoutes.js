const express = require('express');
const router = express.Router();
const asistenteController = require('../controllers/asistenteController');

router.get('/buscar_asistente/:id', asistenteController.buscarPorId);
router.post('/crear_asistente', asistenteController.crearAsistente);
router.put('/borrar_asistente/:id', asistenteController.bajaAsistente);

module.exports = router;


