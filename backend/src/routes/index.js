const {Router} = require('express');

const sessionsRouter =  require('./sessions.routes');
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

module.exports = routes;