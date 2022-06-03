const personaCtrl = require('../controllers/persona.controller');

//instanciar el manejador de rutas
const express = require('express');
const router = express.Router();

//definciion de las rutas
router.get('/', personaCtrl.getPersonas);
router.post('/', personaCtrl.addPersona);
router.get('/:id', personaCtrl.getPersona);

module.exports = router;