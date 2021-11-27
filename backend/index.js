// servidor backend de nodo
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const valorizacionesApi = require('./api/valorizacionesApi');
const DBHelper = require('./utils/DBHelper');

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// enrutamiento api back-end
app.use('/api/valorizaciones', valorizacionesApi);


// empieza a escuchar
server.listen(8888, () => {
    console.log(' success!! port:8888')
})