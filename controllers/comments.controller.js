const {selectComments} = require('../models/comments.model');

exports.getComments = (req,res,next) =>{
    selectComments()
    .then((comments)=>{
        res.status(200).send({comments})
    })
    .catch(next);
}