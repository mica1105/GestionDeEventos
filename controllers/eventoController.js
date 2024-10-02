const Evento = require('../models/evento');

const eventoController = {
    listarEventos: (req, res) => {
        Evento.buscarProximos((err, rows) => {
            if (err) {
                console.error("Error al buscar los eventos: " + err.stack);
                res.status(500).send("Error al buscar los eventos");
                return;
            }
            console.log("Eventos encontrados correctamente: " + rows);
            res.status(200).json(rows);
        });
    },

    buscarPorId: (req, res) => {
        const {id} = req.params;
        Evento.buscarPorId(id, (err,rows)=>{
            if(err){
                console.error("Error al buscar el evento por id: " + err.stack);
                res.status(500).send("Error al buscar el evento por id");
                return;
            }
            console.log("Evento encontrado correctamente: " + rows);
            res.status(200).json(rows);
        });
    },

    crearEvento: (req, res) => {
        const {nombre, fecha, ubicacion, descripcion} = req.body;
        Evento.crearEvento(nombre, fecha, ubicacion, descripcion, (err, result) => {
            if (err) {
                console.error("Error al crear el evento: " + err.stack);
                res.status(500).send("Error al crear el evento");
                return;
            }
            console.log("Evento creado correctamente: " + result);
            res.status(200).json(result);
        });
    },

    actualizarEvento: (req, res) => {
        const {id} = req.params;
        const {nombre, fecha, ubicacion, descripcion} = req.body;
        Evento.actualizarEvento(id, nombre, fecha, ubicacion, descripcion, (err, result) => {
            if (err) {
                console.error("Error al actualizar el evento: " + err.stack);
                res.status(500).send("Error al actualizar el evento");
                return;
            }
            console.log("Evento actualizado correctamente: " + result);
            res.status(200).json(result);
        });
    },

    eliminarEvento: (req, res) => {
        const {id} = req.params;
        Evento.eliminarEvento(id, (err, result) => {
            if (err) {
                console.error("Error al eliminar el evento: " + err.stack);
                res.status(500).send("Error al eliminar el evento");
                return;
            }
            console.log("Evento eliminado correctamente: " + result);
            res.status(200).json(result);
        });
    }    
};

module.exports = eventoController;
