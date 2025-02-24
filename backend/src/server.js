const express = require('express');
require('dotenv').config();

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});