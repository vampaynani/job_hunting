const mongoose = require('mongoose');

const postulantSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    materno:{type: String},
    paterno:{type: String},
    calle:{type: String},
    colonia:{type:String},
    delegacion:{type:String},
    cp:{type:Number},
    edad:{type:Number},
    civil:{type:String},
    hijos:{type:Boolean},
    estudios:{type:String},
    tatuaje:{type:Boolean},
    empresa:{type:String},
    separacion:{type:String},
    puesto:{type:String},
    tiempo:{type:String},
    referencias:[{
        nombre:{type:String},
        numero:{type:String},
        ocupacion:{type:String},
    }],
    exp_mostrador:{type:Boolean},
    exp_atc:{type:Boolean},
    disponibilidad: {
        Lunes: {
            matutino: Boolean,
            vespertino: Boolean
        },
        Martes: {
            matutino: Boolean,
            vespertino: Boolean
        },
        Miercoles: {
            matutino: Boolean,
            vespertino: Boolean
        },
        Jueves:{
            matutino: Boolean,
            vespertino: Boolean
        },
        Viernes:{
            matutino: Boolean,
            vespertino: Boolean
        },
        Sabado: {
            matutino: Boolean,
            vespertino: Boolean
        },
        Domingo: {
            matutino: Boolean,
            vespertino: Boolean
        }
    },
    created: {type:Date, default:Date.now}
});

const postulante = mongoose.model('postulantSchema', postulantSchema);

module.exports = postulante;
