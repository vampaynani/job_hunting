const express = require('express');
const app = express();
const uploader = require('./uploader');
const { PORT } = require('./config');

const mongoose = require('mongoose');
const postulante = require('./db/postulantSchema');

app.use(express.static('public'));
app.use(express.json());

// Routers aquí
app.post('/fileupload', uploader.single('file'), (req, res, next) => {
  res.json({filename: req.file.filename});
})

//METHOD GET ALL
app.get('/postulantes/users', function(req, res){
  postulante.find().then(users =>{
    res.status(200).json(users);
  })
})
//METHOD GET BY ID
app.get('/postulantes/user/:id', function(req, res){
  const search = postulante.findOne({_id:req.params.id}).then(user=>{
    if(!user){
      res.status(404).send('Not Found');
    }else{
      res.status(200).send(user);
    }
  })
});
  
//METHOD POST ONE POSTULANT
app.post('/postulantes/users', function(req, res){
  if(!req.param.nombre || !req.param.paterno || !req.param.materno || !req.param.calle || !req.param.colonia || !req.param.delegacion || !req.param.cp || !req.param.edad || !req.param.civil || !req.param.hijos || !req.param.estudios || !req.param.tatuajes || !req.param.empresa || !req.param.separacion || !req.param.puesto || !req.param.tiempo || !req.param.referencias || !req.param.exp_mostrador || !req.param.exp_atc || !req.param.disponibilidad){
    return res.status(428).send('Precondition Required');
  }else{
    postulante.create({
    nombre: req.param.nombre,
    materno: req.param.paterno,
    paterno: req.param.materno,
    calle: req.param.calle,
    colonia: req.param.colonia,
    delegacion: req.param.delegacion,
    cp: req.param.cp,
    edad: req.param.edad,
    civil: req.param.civil,
    hijos: req.param.hijos,
    estudios: req.param.estudios,
    tatuajes: req.param.tatuajes,
    empresa: req.param.empresa,
    separacion: req.param.separacion,
    puesto: req.param.puesto,
    tiempo: req.param.tiempo,
    referencias: req.params.referencias,
    exp_mostrador: req.param.exp_mostrador,
    exp_atc: req.param.exp_atc,
    disponibilidad: req.param.disponibilidad,
  }).then(function(user){
    res.status(201).json(user);
  })
}
});
  
//METHOD DELETE BY ID
app.delete('/postulantes/user/:id', function(req, res){
  search;
  search.then(user=>{
    if(!user){
      return res.status(404).send('Not Found');
    }
    directorio.deleteOne({_id:req.params.id}).then(done=>{
      res.status(204).end();
    })
  })
});

app.listen(PORT, function() {
  console.info(`Servidor corriendo en`, this.address());
}).on('error', err => console.error);

module.exports = app;