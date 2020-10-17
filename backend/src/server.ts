import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);




// Rota = conjunto
// Recurso = usuários
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=adalto
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({message: 'Hello'});
// });

// REQ / RES
// localhost:3333

// Driver nativo, Query builder, ORM (Object Relational Mapping)

// Exemplos
// Driver nativo: 'SELECT * FROM table1'
// Query builder: knex('users').select('*')
// ORM: Para cada tabela do banco há uma classe no código.