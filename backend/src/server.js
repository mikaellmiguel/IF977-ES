const express = require('express');
require('dotenv').config();
const runMigrations = require('./utils/runMigrations');
const routes = require('./routes');

// Criação das Tabelas no Banco de Dados
runMigrations();

const app = express();
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
    
  if(error instanceof AppError) {
      return response.status(error.statusCode).json({
          status: "error",
          message: error.message
      })
  }

  console.error(error)

  return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
  })
})

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});