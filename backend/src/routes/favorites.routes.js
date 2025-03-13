const {Router} = require('express');

const FavoritesController = require('../controllers/FavoritesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const favoritesController = new FavoritesController();

const favoritesRouter = Router();
favoritesRouter.use(ensureAuthenticated);

favoritesRouter.post('/', favoritesController.create);
favoritesRouter.get('/', favoritesController.index);
favoritesRouter.get('/:name', favoritesController.searchByName);
favoritesRouter.delete('/:ccn3', favoritesController.delete);

module.exports = favoritesRouter;