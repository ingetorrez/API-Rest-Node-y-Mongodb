const express = require('express');
const json = express.json;

const app = express();

//Rutas
const rindex = require('./routes/index');
const rtasks = require('./routes/tasks');

//Config
app.set('port', process.env.PORT || 3000);


app.use(json());

//Rutas
app.use(rindex);
app.use('/tasks', rtasks);

module.exports = app;