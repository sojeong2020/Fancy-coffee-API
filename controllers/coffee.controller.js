const {selectCoffee,
    selectCoffeeById,
    patchCoffee,
    selectCommentsById,
    postCommentById
} = require('../models/coffee.model');

exports.getCoffee = (req,res,next) =>{
    const {sort_by,order,choice} = req.query
    console.log(req.query)
    selectCoffee(sort_by,order,choice)
    .then((coffee)=>{
        res.status(200).send({coffee});
    })
    .catch(next)
}

exports.getCoffeeById =(req,res,next)=>{
    const {coffee_id}=req.params
    selectCoffeeById(coffee_id)
    .then((coffee)=>{
        res.status(200).send({coffee});
    })
    .catch(next)
}

exports.updateCoffee = (req,res,next)=>{
    const {coffee_id}=req.params
    const{inc_votes}=req.body
    patchCoffee(coffee_id,inc_votes)
    .then((update)=>{
        res.status(200).send({update})
    })
    .catch(next);
}

exports.getCommentsById = (req,res,next)=>{
    const {coffee_id}=req.params
    selectCommentsById(coffee_id)
    .then((comments)=>{
        res.status(200).send({comments})
    })
    .catch(next);
}

exports.addCommentById =(req,res,next)=>{
    const {coffee_id}=req.params
    const{author,body,drink_name} = req.body
    console.log(req.body)
    postCommentById(coffee_id,author,body,drink_name)
    .then((postedComment)=>{
        res.status(201).send({postedComment})
    })
    .catch(next);
}