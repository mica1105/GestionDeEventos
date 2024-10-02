require('dotenv').config();
const http = require('http');
const express = require('express');
var cors = require('cors');

const app = express();
const port= process.env.PORT;

var eventoRoutes= require('./routes/eventoRoutes');
var asistenteRoutes= require('./routes/asistenteRoutes');
var participacionRoutes= require('./routes/participacionRoutes');

const connection = require('./config/bd');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.connect(function(err){
    if(err) {
        console.log("No se ha conectado a la base de datos "+err);
        return
    };
    console.log('Conexión establecida con la base de datos MySQL');
});

app.use('/eventos', eventoRoutes);
app.use('/asistentes', asistenteRoutes);
app.use('/participaciones', participacionRoutes);

const server= http.createServer(app);
server.listen(port, ()=>{
    console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

module.exports = app;


