const mongoose = require('mongoose');
const {Schema} = mongoose;
const TransaccionSchema = new Schema({
    emailCliente: {type: String, required: true},
    monedaDestino: {type: String, required: true},
    monedaOrigen: {type:String, required: true},
    cantidadDestino: {type: Number, required:true},
    cantidadOrigen: {type: Number, required:true},
    tasaConversion: {type: Number, required: false},
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);