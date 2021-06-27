const {selectTastes}= require('../models/tastes.model');

exports.getTastes = (req,res,next)=>{
selectTastes()
.then((tastes)=>{
    res.status(200).send({tastes})
})
.catch((err)=>{
    console.log(err)
    next(err)
});
}