const {getCoffee,
     getCoffeeById,
     updateCoffee
    }=require('../controllers/coffee.controller');

const coffeeRouter = require('express').Router();


coffeeRouter.route('/').get(getCoffee)

coffeeRouter.route('/:coffee_id')
            .get(getCoffeeById)
            .patch(updateCoffee)



module.exports = coffeeRouter;