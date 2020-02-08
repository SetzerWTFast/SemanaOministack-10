// METODOS HTTP: GET POST PUT DELETE
// TIPOS DE PARAMETROS:
// query params: request.query (filtros, ordenacao, paginacao,...)
// route params: request.params (identificar um recurso na alteracao ou remocao)
// body: request.body (dados para criacao ou alteracao de algum registro)
// MongoDB (nao relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://ominstack:30136416nata@cluster0-bkwbm.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);