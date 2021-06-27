const {selectCoffee} = require('../models/coffee.model');

exports.getCoffee = (req,res,next) =>{
    const {sort_by} = req.query
    console.log(req.query)
    selectCoffee(sort_by)
    .then((coffee)=>{
        res.status(200).send({coffee});
    })
    .catch(next)
}