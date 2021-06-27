const {getOptions}=require('../controllers/options.controller');

const optionsRouter = require('express').Router();


optionsRouter.route('/').get(getOptions)


module.exports = optionsRouter;