const {selectCoffee} = require('../models/coffee.model');

exports.getCoffee = (req,res,next) =>{
    const {sort_by,order,choice} = req.query
    console.log(req.query)
    selectCoffee(sort_by,order,choice)
    .then((coffee)=>{
        res.status(200).send({coffee});
    })
    .catch(next)
}