const {Router} = require('express');

const FavoritesController = require('../controllers/FavoritesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const favoritesController = new FavoritesController();

const favoritesRouter = Router();
favoritesRouter.use(ensureAuthenticated);

favoritesRouter.get('/name/:name', favoritesController.searchByName);
favoritesRouter.post('/:ccn3', favoritesController.create);
favoritesRouter.get('/', favoritesController.index);
favoritesRouter.get('/:ccn3', favoritesController.show);
favoritesRouter.delete('/:ccn3', favoritesController.delete);

module.exports = favoritesRouter;