const connection = require('../config/bd')

const Asistente = {
    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM asistente WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    crearAsistente: (nombre, email, callback) => {
        const sql = 'INSERT INTO asistente (nombre, email, estado) VALUES(?,?, 1)';
        connection.query(sql, [nombre, email], callback);
    },

    bajaAsistente: (id, callback) => {
        const sql = 'UPDATE asistente SET estado = false WHERE id = ?';
        connection.query(sql, [id], callback);
    }
};

module.exports = Asistente;
        

