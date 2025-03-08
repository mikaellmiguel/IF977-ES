const {Router} = require('express');

const sessionsRouter = Router();

sessionsRouter.post('/', (request, response) => {
  return response.json({message: "Rota de sessões"});
});

module.exports = sessionsRouter;