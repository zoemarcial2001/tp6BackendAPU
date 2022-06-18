const pasajeController = require('../controllers/pasaje.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', pasajeController.getPasajes);
router.get('/:_id', pasajeController.getPasaje);
router.post('/', pasajeController.createPasaje);
router.delete('/:id', pasajeController.deletePasaje);
router.put('/:id', pasajeController.editPasaje);
router.get('/:categoriaPasajero', pasajeController.filterPasajesByCategoria);

module.exports = router;