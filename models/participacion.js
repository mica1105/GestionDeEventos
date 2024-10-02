const connection = require('../config/bd')

const Participacion = {

    crearParticipacion: ( idEvento,idAsistente, callback) => {
        const sql = 'INSERT INTO participacion (idEvento, idAsistente, confirmacion) SELECT e.id, a.id, false FROM evento e, asistente a WHERE e.id = ? AND a.id = ? AND e.fecha > CURRENT_DATE() AND a.estado = true;';
        connection.query(sql, [idEvento, idAsistente], callback);
    },

    confirmarParticipacion: (id, callback)=> {
        const sql = 'UPDATE participacion p JOIN evento e ON p.idEvento= e.id SET p.confirmacion = true WHERE p.id = ? AND e.fecha <= CURRENT_DATE();';
        connection.query(sql, [id], callback);
    },

    eliminarParticipacion: (id, callback)=> {
        const sql = 'DELETE FROM participacion WHERE id = ?;';
        connection.query(sql, [id], callback);
    },

    listaConfirmados: (idEvento, callback)=> {
        const sql = 'SELECT a.nombre FROM participacion p JOIN asistente a ON p.idAsistente = a.id WHERE p.idEvento = ? AND p.confirmacion = true;';
        connection.query(sql, [idEvento], callback);
    },

    certificadoParticipacion: (idEvento, idAsistente, callback)=> {
        const sql = 'SELECT a.nombre AS "Asistente", e.nombre AS "Evento", e.fecha AS "Fecha" FROM participacion p JOIN asistente a ON p.idAsistente = a.id JOIN evento e ON p.idEvento = e.id WHERE p.idEvento = ? AND p.idAsistente = ? AND p.confirmacion = true;';
        connection.query(sql, [idEvento, idAsistente], callback);
    }

};

module.exports = Participacion;
