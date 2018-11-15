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
    hijos:{type:String}, //Debe ser booleano
    estudios:{type:String},
    tatuaje:{type:String}, //Debe ser booleano
    empresa:{type:String},
    separacion:{type:String},
    puesto:{type:String},
    tiempo:{type:String},
    referencias:[{
        nombre:{type:String},
        numero:{type:String},
        ocupacion:{type:String},
    }],
    exp_mostrador:{type:String},//Debe ser booleano
    exp_atc:{type:String},//Debe ser booleano
    disponibilidad: {
        Lunes: {
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Martes: {
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Miercoles: {
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Jueves:{
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Viernes:{
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Sabado: {
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        },
        Domingo: {
            matutino: String,//Debe ser booleano
            vespertino: String//Debe ser booleano
        }
    },
    created: {type:Date, default:Date.now}
});

const postulante = mongoose.model('postulantSchema', postulantSchema);

module.exports = postulante;
