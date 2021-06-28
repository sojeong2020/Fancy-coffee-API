const {getCoffee,
     getCoffeeById,
     updateCoffee,
     getCommentsById,
     addCommentById
    }=require('../controllers/coffee.controller');

const coffeeRouter = require('express').Router();


coffeeRouter.route('/').get(getCoffee)

coffeeRouter.route('/:coffee_id')
            .get(getCoffeeById)
            .patch(updateCoffee)

coffeeRouter.route('/:coffee_id/comments')
            .get(getCommentsById)
            .post(addCommentById)


module.exports = coffeeRouter;