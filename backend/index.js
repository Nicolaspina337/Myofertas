// servidor backend de nodo
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const valorizacionesApi = require('./api/valorizacionesApi');
const gestnotifiApi = require('./api/gestnotifiApi');
const comunicacionesApi = require('./api/comunicacionesApi');
const contactoApi = require('./api/contactoApi');
const DBHelper = require('./utils/DBHelper');

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// enrutamiento api back-end
app.use('/api/valorizaciones', valorizacionesApi);
app.use('/api/gestnotifi', gestnotifiApi);
app.use('/api/comunicaciones', comunicacionesApi);
app.use('/api/contacto', contactoApi);


// empieza a escuchar
server.listen(8888, () => {
    console.log(' success!! port:8888')
})