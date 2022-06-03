const pasaje = require('../models/pasaje');

const pasajeCtrl = {};

pasajeCtrl.getPasajes = async (req, res) => {
    var criterios = {};
    var pasajes;

    if(req.query.categoriaPasajero != '')
        criterios.categoriaPasajero = req.query.categoriaPasajero

    pasajes = await pasaje.find(criterios).populate('pasajero');

    res.json(pasajes);
}

pasajeCtrl.getPasaje = async (req, res) => {
    var pasaje = await pasaje.findById(req.params.id);
    res.json(pasaje);
}

pasajeCtrl.addPasaje = async (req, res) => {
    var pasaje = new pasaje(req.body);
    try {
        pasaje.save();
        res.json({
            'status' : '1',
            'msg' : 'Pasaje guardado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se guardo el pasaje'
        })
    }
}

pasajeCtrl.deletePasaje = async (req, res) => {
    console.log(req.params)
    try {
        await pasaje.deleteOne({_id : req.params.id});
        res.json({
            'status' : '1',
            'msg' : 'Pasaje eliminado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se pudo eliminar el pasaje'
        })
    }
}

pasajeCtrl.editPasaje = async (req, res) => {
    var pasajed = new pasaje(req.body);
    try {
        var d = await pasaje.updateOne({_id: req.body._id}, pasajed);
        res.json({
            'status' : '1',
            'msg' : 'Pasaje actualizado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'No se puedo modificar el pasaje'
        })
    }
}

pasajeCtrl.getPasajesByCategoriaPasajero = async (req, res) => {
    var pasajes = await pasaje.find({    
        categoriaPasajero: req.params.categoriaPasajero
    })
    res.json(pasajes);
}

module.exports = pasajeCtrl;