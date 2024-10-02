const connection = require('../config/bd')

const Evento = {
    buscarProximos: (callback) => { 
        const sql = 'SELECT * FROM evento WHERE fecha > NOW()';
        connection.query(sql, callback);
    },
    buscarPorId: (id, callback) => {
        const sql = 'SELECT ubicacion, descripcion FROM evento WHERE id = ?';
        connection.query(sql, [id], callback);
    },
    crearEvento: (nombre, fecha, ubicacion, descripcion, callback) => {
        const sql = 'INSERT INTO evento (nombre, fecha, ubicacion, descripcion) VALUES(?,?,?,?)';
        connection.query(sql, [nombre, fecha, ubicacion, descripcion], callback);
    },
    actualizarEvento: (id, nombre, fecha, ubicacion, descripcion, callback) => {
        const sql = 'UPDATE evento SET nombre = ?, fecha = ?, ubicacion = ?, descripcion = ? WHERE id = ?';
        connection.query(sql, [nombre, fecha, ubicacion, descripcion, id], callback);
    },
    eliminarEvento: (id, callback) => {
        const sql = 'DELETE FROM evento WHERE id = ?';
        connection.query(sql, [id], callback);
    }
}

module.exports = Evento;

