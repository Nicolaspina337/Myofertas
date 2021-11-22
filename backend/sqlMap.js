// declaración sql
var sqlMap = {
    valoralizaciones: {
        add: 'insert into c_valoralizaciones(titulo_valo, clasificacion_estr, comentario, archivo_foto) values (?, ?, ?, ?)',
    }
};

module.exports = sqlMap;