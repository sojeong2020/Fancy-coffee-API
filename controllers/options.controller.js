const {selectOptions} = require('../models/options.model');

exports.getOptions = (req,res,next) =>{
    selectOptions()
    .then((options)=>{
        res.status(200).send({options})
    })
    .catch(next);
}