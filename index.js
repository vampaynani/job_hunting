const express = require('express');
const app = express();
const uploader = require('./uploader');
const { PORT } = require('./config');

app.use(express.static('public'));
app.use(express.json());

// Routers aquí
app.post('/fileupload', uploader.single('file'), (req, res, next) => {
  res.json({filename: req.file.filename});
})

app.listen(PORT, function() {
  console.info(`Servidor corriendo en`, this.address());
}).on('error', err => console.error);

module.exports = app;