const Persona = require('../models/persona')

const personaCtrl = {};

personaCtrl.getPersonas = async (req, res) => {
    var personas = await Persona.find();
    res.json(personas);
}

personaCtrl.addPersona = async (req, res) => {
    var persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({
            status : '1',
            msg : 'Persona guardada'
        })
    } catch (error) {
        res.json({
            status : '0', 
            msg : 'Error, no se guardó la persona'
        })
    }
}

personaCtrl.getPersona = async (req, res) => {
    var persona = await Persona.findById(req.params.id);
    res.json(persona);
}


module.exports = personaCtrl ;