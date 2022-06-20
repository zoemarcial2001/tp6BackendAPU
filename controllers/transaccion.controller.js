const Transaccion = require("../models/transaccion");
const Persona = require("../models/persona")

const transaccionCtrl = {};

transaccionCtrl.getTransaccions = async(req, res) => {
    try {
        var transaccions = await Transaccion.find();
        res.json(transaccions);
    } catch (error) {
        console.log(error)
        res.json({
            status: '1',
            msg: 'Error ',

        })
    }
}
transaccionCtrl.createTransaccion = async(req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            status: '1',
            msg: 'Transaccion guardado.'
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: '0',
            msg: 'Error procesando operacion.',

        })
    }
}
transaccionCtrl.getTransaccionesFiltro = async(req, res) => {
    try {
        const origen = req.query.origen;
        const destino = req.query.destino;
            
        var transacciones = await Transaccion.find({monedaOrigen: origen, monedaDestino: destino});
        
        res.json(transacciones)
        
    } catch (error) {
        console.log(error)
        res.json({
            status: '0',
            msg: 'Error al filtrar transacciones por divisas',
        })
    }
}

module.exports = transaccionCtrl;