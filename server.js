// IMPORTANTDO BIBLIOTECAS
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());

// iniciando o bd ('mongodb://user@senha/localhost:27017/nodeapi')
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

//const Product = mongoose.model('Product');

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);