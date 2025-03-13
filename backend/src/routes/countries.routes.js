const {Router} = require('express');

const CountriesController = require('../controllers/CountriesController');
const { count } = require('../database/knex');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const countriesController = new CountriesController();

const countriesRouter = Router();
countriesRouter.use(ensureAuthenticated);

countriesRouter.get('/', countriesController.index);
countriesRouter.get('/:ccn3', countriesController.show);
countriesRouter.get('/name/:name', countriesController.findByCountryName);

module.exports = countriesRouter;