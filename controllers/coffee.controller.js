const {selectCoffee} = require('../models/coffee.model');

exports.getCoffee = (req,res,next) =>{
    selectCoffee()
    .then((coffee)=>{
        res.status(200).send({coffee});
    })
    .catch(next);
}