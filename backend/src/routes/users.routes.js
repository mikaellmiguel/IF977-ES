const {Router} = require('express');

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  const {name, email} = request.body;
  return response.json({name, email});
});

module.exports = usersRouter;