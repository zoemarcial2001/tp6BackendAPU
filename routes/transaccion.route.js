const transaccionCtrl = require('../controllers/transaccion.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', transaccionCtrl.getTransaccions);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/filtro:email?:origen?:destino?', transaccionCtrl.getTransaccionesFiltro);

module.exports = router;