const Transaccion = require("../models/transaccion");

const transaccionCtrl = {};

transaccionCtrl.hacerTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    var transaccionesCliente = await Transaccion.find({"emailCliente": req.params.email });
    res.json(transaccionesCliente);
}

transaccionCtrl.getTransaccionesDestino = async (req, res) => {

    var transacciones = await Transaccion.find({"monedaOrigen": req.params.moneda });
    var transaccionesD = await Transaccion.find({"monedaDestino": req.params.moneda })
    transaccionesD.forEach((t) => {
        transacciones.push(t)
    })
    res.json(transacciones)
}

module.exports = transaccionCtrl;