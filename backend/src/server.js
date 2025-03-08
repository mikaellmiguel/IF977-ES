const express = require('express');
require('dotenv').config();
const knex = require('./database/knex');
const routes = require('./routes');

// Criando as tabelas no Banco de Dados
knex.migrate.latest()
  .then(() => {
    console.log('Migrations executadas com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao executar as migrations:', error);
  })
  .finally(() => {
    knex.destroy();
  });

const app = express();
app.use(express.json());
app.use(routes);

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});