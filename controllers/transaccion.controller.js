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
        const persona = await Persona.findOne({ emailCliente: transaccion.email })

        if (!persona) throw new Error('Persona no existe')

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
        const origen = req.query.origen,
            destino = req.query.destino,
            email = req.query.email;
        var transacciones = await Transaccion.find();
        if (origen != undefined && destino != undefined) transacciones = await Transaccion.find({
            monedaOrigen: origen,
            monedaDestino: destino
        })
        
        if (email != undefined) transacciones = await Transaccion.find({ email: email })
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