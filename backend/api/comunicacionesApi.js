const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// aumentar usuario
router.post('/add', (req, res) => {
    let sqlStr = sql.comunicaciones.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.nombre, params.correo, params.numero_contact, params.motivo_solici], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

module.exports = router;