// declaración sql
var sqlMap = {
    valoralizaciones: {
        add: 'insert into c_valoralizaciones(titulo_valo, clasificacion_estr, comentario, archivo_foto) values (?, ?, ?, ?)',
    },
    gestnotifi: {
        add: 'insert into gest_notifi(titulo_notifi, descripcion_notifi, foto_notifi) values (?, ?, ?)',
        get: 'select * from gest_notifi'
    },
    comunicaciones: {
        add: 'insert into comunicaciones_soli(nombre, correo, numero_contact, motivo_solici) values (?, ?, ?, ?)',
    }
};

module.exports = sqlMap;