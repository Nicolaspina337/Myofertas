const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// aumentar usuario
router.post('/add', (req, res) => {
    let sqlStr = sql.comunicaciones.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.nombres, params.correos, params.contactos, params.descripcion], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

module.exports = router;