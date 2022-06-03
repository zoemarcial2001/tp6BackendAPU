const transaccionCtrl = require('../controllers/transaccion.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', transaccionCtrl.getTransacciones);
router.get('/:email', transaccionCtrl.getTransaccionesCliente);
router.post('/', transaccionCtrl.hacerTransaccion);
router.get('/tras/:moneda', transaccionCtrl.getTransaccionesDestino);

module.exports = router;