const express = require('express');
require('dotenv').config();

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});