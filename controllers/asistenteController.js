const Asistente = require('../models/asistente');

const asistenteController = {
    buscarPorId: (req, res) => {
        const {id} = req.params;
        Asistente.buscarPorId(id, (err, rows) => {
            if (err) {
                console.error("Error al buscar el asistente por id: " + err.stack);
                res.status(500).send("Error al buscar el asistente por id");
                return;
            }
            console.log("Asistente encontrado correctamente: " + rows);
            res.status(200).json(rows);
        });
    },

    crearAsistente: (req, res) => {
        const {nombre, email} = req.body;
        if (!nombre || !email) {
            console.log("Datos incompletos:", {nombre, email});
            return res.status(400).json({ error: "Nombre y email son requeridos" });
        }
        Asistente.crearAsistente(nombre, email, (err, result) => {
            if (err) {
                console.error("Error al crear el asistente: " + err.stack);
                res.status(500).send("Error al crear el asistente");
                return;
            }
            console.log("Asistente creado correctamente: " + result);
            res.status(200).json(result);
        });
    },

    bajaAsistente: (req, res) => {
        const {id} = req.params;
        Asistente.bajaAsistente(id, (err, result) => {
            if (err) {
                console.error("Error al dar de baja al asistente: " + err.stack);
                res.status(500).send("Error al dar de baja al asistente");
                return;
            }
            console.log("Asistente dado de baja correctamente: " + result);
            res.status(200).json(result);
        });
    }
};

module.exports = asistenteController;
            
