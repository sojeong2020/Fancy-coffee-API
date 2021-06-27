const {getCoffee}=require('../controllers/coffee.controller');

const coffeeRouter = require('express').Router();


coffeeRouter.route('/').get(getCoffee)


module.exports = coffeeRouter;