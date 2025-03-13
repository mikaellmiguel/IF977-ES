const {Router} = require('express');

const sessionsRouter =  require('./sessions.routes');
const usersRouter = require('./users.routes');
const countriesRouter = require('./countries.routes');

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/countries', countriesRouter);

module.exports = routes;