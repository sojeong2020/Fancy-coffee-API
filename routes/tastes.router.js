const{ getTastes }= require('../controllers/tastes.controller');

const tastesRouter = require('express').Router();


tastesRouter.route('/').get(getTastes)


module.exports = tastesRouter;