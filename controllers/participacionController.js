const Participacion = require('../models/participacion');

const participacionController = {
    crearParticipacion: (req, res) => {
        const {idEvento, idAsistente} = req.body;
        //console.log(`Intentando crear participación con idAsistente: ${idAsistente}, idEvento: ${idEvento}`);
        Participacion.crearParticipacion(idEvento, idAsistente, (err, result) => {
            if (err) {
                console.error("Error al crear la participación:", err);
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(409).json({ error: "Ya existe una participación para este asistente en este evento" });
                } else if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                    res.status(400).json({ error: "El asistente o el evento especificado no existe" });
                } else {
                    res.status(500).json({ error: "Error al crear la participación", detalles: err.message });
                }
                return;
            }
            if (result.affectedRows === 0) {
                console.error("No se pudo crear la participación:", result);
                res.status(400).json({ error: "No se pudo crear la participación", detalles: result });
                return;
            }
            
            console.log("Participación creada correctamente:", result);
            res.status(201).json(result);
        });
    },

    confirmarParticipacion: (req, res) => {
        const {id} = req.params;
        Participacion.confirmarParticipacion(id, (err, result) => {
            if (err) {
                console.error("Error al confirmar la participación: " + err.stack);
                res.status(500).send("Error al confirmar la participación");
                return;
            }
            console.log("Participación confirmada correctamente: " + result);
            res.status(200).json(result);
        });
    },

    eliminarParticipacion: (req, res) => {
        const {id} = req.params;
        Participacion.eliminarParticipacion(id, (err, result) => {
            if (err) {
                console.error("Error al eliminar la participación: " + err.stack);
                res.status(500).send("Error al eliminar la participación");
                return;
            }
            console.log("Participación eliminada correctamente: " + result);
            res.status(200).json(result);
        });
    },

    listaConfirmados: (req, res) => {
        const {idEvento} = req.params;
        //console.log(`Intentando buscar participantes confirmados con idEvento: ${idEvento}`);
        Participacion.listaConfirmados(idEvento, (err, rows) => {
            if (err) {
                console.error("Error al buscar los participantes confirmados: " + err.stack);
                res.status(500).send("Error al buscar los participantes confirmados");
                return;
            }
            console.log("Participantes confirmados encontrados correctamente: " + rows);
            res.status(200).json(rows);
        });
    },

    certificadoParticipacion: (req, res) => {
        const {idEvento, idAsistente} = req.params;
        Participacion.certificadoParticipacion(idEvento, idAsistente, (err, rows) => {
            if (err) {
                console.error("Error al buscar el certificado de participación: " + err.stack);
                res.status(500).send("Error al buscar el certificado de participación");
                return;
            }
            console.log("Certificado de participación encontrado correctamente: " + rows);
            res.status(200).json(rows);
        });
    }
};

module.exports = participacionController;
