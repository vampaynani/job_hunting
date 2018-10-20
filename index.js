const express = require('express');
const app = express();

const { PORT } = require('./config');

app.use(express.static('public'));
app.use(express.json());

// Routers aquí

app.listen(PORT, () => {
  console.info(`Servidor corriendo en ${this.address()}`);
}).on('error', err => console.error);

module.exports = app;