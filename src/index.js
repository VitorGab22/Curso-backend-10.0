const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const { setupwebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupwebsocket(server);

mongoose.connect('mongodb+srv://user:password@cluster0.14tg7.mongodb.net/omni10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);

//get,post,put,delete

//Metódos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:

//Query Params:
//Route Params:requestmparams (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//mongoDB (não-relacional)

// app.post('/users', (request, response) => {
//   console.log(request.body);
//   return response.json({ message: 'ola' })
// });
