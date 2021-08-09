const {getEndpoints} = require('../controllers/api.controller');

const tastesRouter = require('./tastes.router');
const optionsRouter = require('./options.router');
const coffeeRouter = require('./coffee.router');
const commentsRouter = require('./comments.router');



const apiRouter = require('express').Router();

apiRouter.get('/', getEndpoints);

apiRouter.use('/tastes',tastesRouter);

apiRouter.use('/options',optionsRouter);

apiRouter.use('/coffee',coffeeRouter);

apiRouter.use('/comments',commentsRouter);






module.exports = apiRouter