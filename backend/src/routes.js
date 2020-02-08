//<--BLOCO PARA RESOLVER O ERRO A SEGUIR-->
//(node:18240) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
//<--BLOCO PARA RESOLVER O ERRO ACIMA-->

const { Router } = require('express');
const DevController = require('./Controllers/DevControllers');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

routes.get('./devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;