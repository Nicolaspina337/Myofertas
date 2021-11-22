// Asistente de conexión a la base de datos
const mysql = require('mysql');

class DBHelper{
    // Obtener conexión a la base de datos
    getConn(){
        let conn = mysql.createConnection({
            // Configuración de conexión a la base de datos
            host:'127.0.0.1',
            port:'3306',
            user:'root',				// Nombre de usuario del administrador de Mysql
            password:'nico123',			// Contraseña de administrador de Mysql
            database:'myofertas'  			// Nombre de la base de datos
        });
        conn.connect();
        return conn;
    }
}

module.exports = DBHelper;