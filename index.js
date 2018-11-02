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
});

//METHOD GET BY ID (SOLO SI ES NECESARIO)
app.get('/postulantes/user/:id', function(req, res){
  if(!req.params.id){
    return res.status(428).send('Precondition Required');
  }
  postulante.findOne({_id:req.params.id}).then(user=>{
    if(!user){
      return res.status(404).send('Not Found');
    }
    res.status(200).json(user);
  })
})

  
//METHOD POST ONE POSTULANT
app.post('/postulantes/users', function(req, res){
  if(!req.body.nombre || !req.body.materno || !req.body.paterno || !req.body.calle || !req.body.colonia || !req.body.delegacion || !req.body.cp || !req.body.edad || !req.body.civil || !req.body.hijos || !req.body.estudios || !req.body.tatuajes || !req.body.empresa || !req.body.separacion || !req.body.puesto || !req.body.tiempo || !req.body.referencias || !req.body.exp_mostrador || !req.body.exp_atc || !req.body.disponibilidad){
    return res.status(428).send('Precondition Required');
  }else{
    postulante.create({
    nombre: req.body.nombre,
    paterno: req.body.paterno,
    materno: req.body.materno,
    calle: req.body.calle,
    colonia: req.body.colonia,
    delegacion: req.body.delegacion,
    cp: req.body.cp,
    edad: req.body.edad,
    civil: req.body.civil,
    hijos: req.body.hijos,
    estudios: req.body.estudios,
    tatuajes: req.body.tatuajes,
    empresa: req.body.empresa,
    separacion: req.body.separacion,
    puesto: req.body.puesto,
    tiempo: req.body.tiempo,
    referencias: req.body.referencias,
    exp_mostrador: req.body.exp_mostrador,
    exp_atc: req.body.exp_atc,
    disponibilidad: req.body.disponibilidad,
  }).then(function(user){
    res.status(201).json(user);
  })
}
});
  
//METHOD DELETE BY ID
app.delete('/postulantes/user/:id', function(req, res){
  const search = postulante.findOne({_id:req.params.id});
  search.then(user=>{
    if(!user){
      return res.status(404).send('Not Found');
    }
    postulante.deleteOne({_id:req.params.id}).then(done=>{
      res.status(204).end();
    })
  })
});

mongoose.connect('mongodb://Grimmgalohm:goldenrenamon1@ds127293.mlab.com:27293/coderoomdb', err=>{
    if(err){
    console.log('Something goes wrong, DO NOT PANIC, keep calm and blame it on the boogie');
    }
})

app.listen(PORT, function() {
  console.info(`Servidor corriendo en`, this.address());
}).on('error', err => console.error);

module.exports = app;
