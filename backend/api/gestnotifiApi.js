const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');
const { route } = require('./comunicacionesApi');

// obtener todas las notificaciones
router.get('/get', (req, res) => {
    let sqlStr = sql.gestnotifi.get;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, null, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

// aumentar notificacion
router.post('/add', (req, res) => {
    let sqlStr = sql.gestnotifi.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.titulo, params.descripcion, params.foto], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

module.exports = router;