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
    hijos:{type:String},
    estudios:{type:String},
    tatuaje:{type:String},
    empresa:{type:String},
    separacion:{type:String},
    puesto:{type:String},
    tiempo:{type:String},
    referencias:[{
        nombre:{type:String},
        numero:{type:String},
        ocupacion:{type:String},
    }],
    exp_mostrador:{type:String},
    exp_atc:{type:String},
    disponibilidad: {
        Lunes: {
            matutino: String,
            vespertino: String
        },
        Martes: {
            matutino: String,
            vespertino: String
        },
        Miercoles: {
            matutino: String,
            vespertino: String
        },
        Jueves:{
            matutino: String,
            vespertino: String
        },
        Viernes:{
            matutino: String,
            vespertino: String
        },
        Sabado: {
            matutino: String,
            vespertino: String
        },
        Domingo: {
            matutino: String,
            vespertino: String
        }
    },
    created: {type:Date, default:Date.now}
});

const postulante = mongoose.model('postulantSchema', postulantSchema);

module.exports = postulante;
